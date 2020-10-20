const express = require("express");
// const path = require('path');
// const fs = require("fs");
// const request = require('request');
// const cors = require('cors');
// const http = require('http');
const app = express();
const port = 8889;
app.use(express.static("public"));
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://111.229.212.111:27017/";
const base64 = require("base-64");
// var superagent = require('superagent');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
// const proxy = require('express-http-proxy');
app.use(
  session({
    secret: "qz",
    name: "qz-node",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 2 * 60 * 60 * 1000,
    },
    rolling: true,
    store: new MongoStore({
      url: "mongodb://111.229.212.111:27017/user",
      touchAfter: 24 * 3600,
    }),
  })
);

// app.use(cors());
app.post("/api/registerUser", (req, response) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("数据库连接成功");
    console.log("----", req.query.code);
    const dbo = db.db("user");
    const {
      query: { username, password, telephone },
    } = req;
    dbo.collection("userInfo").insertOne(
      {
        username: username,
        telephone: telephone,
        password: base64.encode(password),
      },
      function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
        // req.session.userInfo = {username, password: base64.encode(password), telephone};
        response.status(200).json({ code: "200", message: "注册成功" });
      }
    );
  });
});
app.post("/api/login", function (req, response) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("数据库连接成功");
    const dbo = db.db("user");
    const {
      query: { username, password },
    } = req;
    console.log("查询该记录1", username, password);
    dbo
      .collection("userInfo")
      .findOne(
        { username: username, password: base64.encode(password) },
        function (err, res) {
          if (err) throw err;
          if (!!res) {
            req.session.userInfo = {
              username: res.username,
              telephone: res.telephone,
            };
            response
              .status(200)
              .json({
                code: "200",
                message: "登录成功",
                info: { username: res.username, telephone: res.telephone },
              });
          } else {
            response.status(500).json({ code: "500", message: "请先注册" });
          }
          db.close();
        }
      );
  });
});
app.get("/api/check", function (req, res) {
  if (!!req.session.userInfo) {
    res
      .status(200)
      .json({
        code: "200",
        message: `欢迎回来${req.session.userInfo.username}`,
      });
  } else {
    res.status(401).json({ message: `已失效` });
  }
});
app.listen(port, function () {
  console.log("server started on " + port);
});

import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getUser from "../../api/getUser";

const Page404: FC<any> = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    setCount(1);
    console.log("after useEffect", count);
    // getUser.testHttp().then((res: any)=>{
    //     console.log(res)
    // })
  });
  console.log("404页面");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img src={require("../../../assests/images/404.png")} />
        <p style={{ textAlign: "center" }}>
          <Link to={"/login"}>去登陆{count}</Link>
        </p>
      </div>
    </div>
  );
};
export default Page404;

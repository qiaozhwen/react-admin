import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
import singleSpaReact from "single-spa-react";
import singleSpaCss from 'single-spa-css'
import "antd/dist/antd.css";

// Qay(<App/>, document.getElementById('qz'));
// ReactDom.render(<App />, document.getElementById("qz"));

const lifecycles = singleSpaReact({
  React,
  ReactDOM:ReactDom,
  rootComponent:App,
  errorBoundary(err, info, props) {
    return (
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        Error
      </div>
    );
  },
})
const cssLifecycles = singleSpaCss({
  // 这里放你导出的 CSS，如果 webpackExtractedCss 为 true，可以不指定
  cssUrls: ["http://localhost:8889/index.css"],

  // 是否要使用从 Webpack 导出的 CSS，默认为 false
  webpackExtractedCss: false,

  // 是否 unmount 后被移除，默认为 true
  shouldUnmount: true,

  // 超时，不废话了，都懂的
  timeout: 5000
})
export const bootstrap = [lifecycles.bootstrap, cssLifecycles.bootstrap];
export const mount = [lifecycles.mount, cssLifecycles.mount];
export const unmount = [lifecycles.unmount, lifecycles.unmount];

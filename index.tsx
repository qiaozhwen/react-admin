import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
import "antd/dist/antd.css";

// Qay(<App/>, document.getElementById('qz'));
const render = ()=>{
  ReactDom.render(<App />, document.getElementById("qz"));
}
if(!(window as any).__POWERED_BY_QIANKUN__){
  render();
}
export async function bootstrap(){

}
export async function mount() {
  render()
}
export async function unmount(){
  // ReactDom.unmountComponentAtNode(document.getElementById('qz'));
}

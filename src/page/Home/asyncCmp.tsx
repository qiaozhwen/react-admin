import React from "react";
export const AsyncCmp = ()=>{
  // throw {
  //   asyncCmp:new Promise((resolve)=>{
  //     resolve('async cmp')
  //   })
  // }
  return <div>
    我是ASYNC-CMP
  </div>
}
const AstcnCmp = AsyncCmp as any
export {AstcnCmp}

import React, {useEffect, useState} from "react";
export const SliderList = (props)=>{
  const [index ,setIndex] = useState(0)
  console.log('1111111' , props.children)
  useEffect(()=>{

    setInterval(()=>{
      setIndex((pre)=>pre===4?0:pre+1)
    },3000)
  },[])
  return (
    <div style={{width:400, position:"relative", overflow:"hidden", display:"flex"}}>
      {props.children[index]}
      <div style={{position:"absolute", left:200, top:100}}>...</div>
    </div>
  )
}
export const SliderItem = (props)=>{
  return (
    <div style={{width:400}}>
      {props.children}
    </div>
  )
}

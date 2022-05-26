import React, { useEffect, useState, memo, useCallback } from "react";
import {Modal} from "antd";
const Test = ({ tya = { name: "123" } }: any) => {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(tya);
  const [test1, setTest1] = useState<any>(false);
  const [test2, setTest2] = useState({
    name: "init22222",
    arr: [1, 2, 3, 4, 5, 6, 110],
    perople: { name: "333124513", age: "1511" },
  });
  const [num, setNumber] = useState(0);
  const clickMe = () => {
    setTest1('nmsl')
    // setTimeout(() => alert(num), 2000);
  };
  function testfunc() {}
  function eee () {
   // Promise.resolve().then(()=>{
   //   // ffff()
   // })
    setTest1(false)
    ffff()
  }
  useEffect(()=>{
    console.log('test1', test1)
  },[test1])
  async function ffff (){
    await setTimeout(()=>{console.log('3')}, 5000)
    Promise.resolve().then(()=>{
      setTest1(false)
      console.log('test11', test1)
      setTest1(true)
      console.log('test11', test1)
      setTest1(false)
      console.log('test11', test1)
      setTest1(true)
      console.log('test11', test1)
      setTest1(false)
      console.log('test11', test1)
      setTest1(true)
      console.log('test11', test1)
      setTest1(false)
      console.log('test11', test1)
      setTest1(true)
      console.log('test11', test1)
      setTest1(false)
      console.log('test11', test1)
    })
  }
  const handerClick=()=> {
    // Promise.resolve().then(res=>{
    //   console.log(num, 'inside')
    //   setNumber(num => num + 1)
    //   console.log(num, 'inside')
    //   setNumber(num => num + 1)
    //   console.log(num, 'inside')
    //   setNumber(num => num + 1)
    //   console.log(num, 'inside')
    //   setNumber(num => num + 1)
    //   console.log(num, 'inside')
    //   setNumber(num => num + 1)
    //   console.log(num, 'inside')
    //   // setNumber(num+1)
    //   // // console.log(num, 'inside')
    //   // setNumber(num+1)
    //   // // console.log(num, 'inside')
    //   // setNumber(num+1)
    //   // // console.log(num, 'inside')
    //   // setNumber(num+1)
    //   // // console.log(num, 'inside')
    //   // setNumber(num+1)
    // })
    setNumber(2)
    setNumber(3)
    setNumber(4)
    setNumber(5)
  }
  console.log('🚀')
  // console.log("useEffect run father");
  return (
    <>
      <button onClick={ handerClick } >{ num }</button>
      <button onClick={ ()=>setNumber(8) } >cccccc </button>
      <div
        onClick={() => {
          eee()
        }}
      >
        ++++
      </div>
      <div onClick={()=>setTest1('nmsl')}>----</div>
      <button onClick={clickMe}>click me</button>
      {/*<div*/}
      {/*  onClick={() => {*/}
      {/*    setTest1(false);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  11111111111*/}
      {/*</div>*/}
      {test1 &&
      <Modal visible={true} onOk={eee}>vvvvvvvv</Modal>
      || null}
      <Child testfunc={testfunc} tya={test} />
    </>
  );
};
const Child = memo(({ tya }: any) => {
  // console.log("child render");
  // useEffect(() => {
  //   console.log("useEffect run");
  //   return () => {
  //     console.log("useEffect end");
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("useEffect run222");
  //   return () => {
  //     console.log("useEffect end222");
  //   };
  // });
  return <div>child</div>;
});
export default Test;

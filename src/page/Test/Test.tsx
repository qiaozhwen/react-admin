import React, { useEffect, useState, memo, useMemo,useCallback,useRef,useLayoutEffect } from "react";
import {connect} from "react-redux";
import ReactDom from "react-dom";
import request from "../../utils/request";
import {Upload, Button,message} from "antd";
import {Modal} from "antd";
import {SliderList, SliderItem} from "./SliderList";

let hhh = false;
const  useQz = (cb:any, deps:any)=>{
  const aaa = useRef<any>(null)
  if(aaa.current){
    return true
  }
  else {
    aaa.current = true
    return  false
  }
}
const useDebounce = (cb, delay)=>{
  const cbRef = useRef(null)
  let debounce = useMemo(()=>{
    return ()=>{
      if(cbRef.current) clearTimeout(cbRef.current)
      cbRef.current = setTimeout(()=>cb(),delay)
    }
  },[])
  const cancel = ()=>{
    debounce = null
    cbRef.current = null
  }
  return {debounce,cancel}
  // useEffect(()=>{
  // })
}
const useUnMount = (cb) =>{
  useEffect(()=>cb(),[])
}
const Test = ({ tya = { name: "123" },stateFrom,addCount }: any) => {
  console.log('000000',stateFrom)
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(tya);
  const [test1, setTest1] = useState<any>(0);
  const  ius:any = useDebounce(()=>{console.log('ius')}, 1000)
  const [test2, setTest2] = useState({
    name: "init22222",
    arr: [1, 2, 3, 4, 5, 6, 110],
    perople: { name: "333124513", age: "1511" },
  });
  const [num, setNumber] = useState(0);
  useUnMount(ius.cancel)
  useEffect(()=> {
    // ius()
  },[test1])
  const clickMe = () => {
    // addCount(99)
    setTest1(!test1)
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
  const data = useMemo(()=>test1,[])
  const cba = useCallback(()=>{},[])
  console.log(data,'12333')
  console.log('asd', useQz('',''))
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
  const props = {
    name: 'file',
    // action: 'http://localhost:8888/api/getFileId',
    // headers: {
    //   authorization: 'authorization-text',
    // },
    multiple: true,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const handleChange = async (event)=>{
    const files = Array.from(event.target.files)
    const data = await request({
      method: "post",
      url: `/api/getFileId`,
      body:{file:files.shift()}
    })
    let proArr = []
    for(var val in files){
      const dFOrm:any = new FormData()
      dFOrm.append('hhh'+val, files[val])
      proArr.push(request({
        method: "post",
        url: `/api/getFileById`,
        data:dFOrm
      }))
    }
    Promise.all(proArr).then(res=>console.log('成功了',res))
  }
  useLayoutEffect(()=>{
    console.log(Date.now())
  },[test1])
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
      <button onClick={clickMe}>click me{test1}{Date.now()}</button>
      {/*<div*/}
      {/*  onClick={() => {*/}
      {/*    setTest1(false);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  11111111111*/}
      {/*</div>*/}
      {/*{test1 &&*/}
      {/*<Modal visible={true} onOk={eee}>vvvvvvvv</Modal>*/}
      {/*|| null}*/}
      <Child testfunc={cba} />
      {/*<KeepAlive active={test1}>*/}
      {/*  <input placeholder={'请输入(测试keepalive)'}/>*/}
      {/*</KeepAlive>*/}
      {!!test1 && <input placeholder={'请输入(测试keepalive)'}/>}
      {/*<Upload {...props}>*/}
      {/*  <Button>Click to Upload</Button>*/}
      {/*</Upload>*/}
      <input type={"file"} multiple onChange={handleChange}/>
      <SliderList>
        <SliderItem>
          <img style={{width:'100%'}} src={require('./v2-4be93145114afb425a9d4e4bf4e57dc1_r.jpg')}/>
        </SliderItem>
        <SliderItem>
          <img style={{width:'100%'}} src={require('./v2-4d02d574567f64e4c78b1e3fc33d119f_r.jpg')}/>
        </SliderItem>
        <SliderItem>
          <img style={{width:'100%'}} src={require('./v2-6cd79620efc0e75e5aed53df917addbd_r.jpg')}/>
        </SliderItem>
        <SliderItem>
          <img style={{width:'100%'}} src={require('./v2-76d03f1735cbb35b41ee6e57d71c8501_r.jpg')}/>
        </SliderItem>
        <SliderItem>
          <img style={{width:'100%'}} src={require('./v2-adcc6a242f87a7ad17e8863743dab6d8_r.jpg')}/>
        </SliderItem>
      </SliderList>
    </>
  );
};
const Child = memo(({ tya }: any) => {
  console.log("child render");
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
const mapStateProps = (state:any)=>{
  return {
    stateFrom:state
  }
}
const mapDispatchProps = (dispatch)=>{
  return {
    addCount:(data)=>{
      dispatch({
        type:'ADD_COUNT',
        payload:{count:data}
      })
    }
  }
}
const KeepAlive = (props)=>{
  const [preAddElem] = useState(document.createElement('div'))
  const divRef = useRef(null)
  useLayoutEffect(()=>{
    if(props.active){
      divRef.current.appendChild(preAddElem)
    }
    else {
      try{

        divRef.current.removeChild(preAddElem)
      }
      catch (e) {

      }
    }
  }, [props.active])
  return <div ref={divRef}>
    {(ReactDom as any).createPortal(props.children, preAddElem)}
  </div>
}
const TestCmp = connect(mapStateProps,mapDispatchProps)(Test)
export default TestCmp;

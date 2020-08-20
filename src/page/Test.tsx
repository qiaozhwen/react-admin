import React, {useEffect, useState, memo, useCallback} from 'react';
const Test = ({tya = {name: '123'}}: any) => {
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(tya);
    const [test2, setTest2] = useState({name: 'init22222', arr: [1,2,3,4,5,6,110], perople: {name: '333124513', age: '1511'}});
    function testfunc() {
    }
    console.log('useEffect render Father')
    return (
        <>
            <div onClick={()=>{setCount(count+1)}}>++++</div>
            <Child testfunc={useCallback(()=>{return testfunc}, [])} tya={tya}/>
        </>
    )
};
const Child = memo(({tya}: any) => {
    useEffect(() => {
        console.log('useEffect run')
    }, [tya]);
    console.log('useEffect run22222');
    return (
        <div>child</div>
    )
});
export default Test
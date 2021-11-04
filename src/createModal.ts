import React, {useState, useEffect, Component} from 'react'

type initStateType = {
  [index: string]: any
}
type listenerType = {
  [index: string]: any
}

interface setGlobalState<T> {
  (key: string): [initStateType, any];
}
export function createContainer<T>(initState: initStateType) {
  let globalState = initState
  const listeners: listenerType = Object.fromEntries(Object.entries(initState).map(([key, value])=>[key, new Set([])]))
  const setGlobalState = <T>(key:any, nextValue:any) => {
    if (typeof nextValue === 'function') {
      globalState = {...globalState, [key]: nextValue(globalState[key])};
    } else {
      globalState = {...globalState, [key]: nextValue};
    }
    listeners[key].forEach((listener:any)=>{
      listener()
    })
  }
  const useSetGlobalState: setGlobalState<T> = (key) => {
    const [state, setState] = useState<any>(globalState[key])
    useEffect(() => {
      const listener = () => {
        setState(globalState[key]);
      };
      listeners[key].add(listener);
      listener(); // in case it's already changed
      return () => listeners[key].delete(listener); // cleanup
    }, []);
    return [state, (newValue:any) => {
      setGlobalState(key, newValue);
    }]
  }
  const releaseState = (WrapComponent: any) => {
    class ReturnComponent extends React.Component<any, any> {
      constructor(props:any) {
        super(props);
      }
      changeLocalState (data:any) {
        // change global state
        const {key, value} = data
        globalState[key] = value;
        for (let listener of listeners[key]) {
          listener()
        }
        this.render();
      }
      render() {
        const newProps = {...this.props, ...globalState, changeLocalState:this.changeLocalState}
        console.log('22222', React.cloneElement(WrapComponent, {...newProps}))
        // combine with hook state
        return React.cloneElement(WrapComponent, {...newProps})
      }
    }
    return ReturnComponent
  }
  return {
    setGlobalState,
    useSetGlobalState,
    releaseState
  }
}

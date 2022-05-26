import {handleActions} from 'redux-actions'
//state:所有数据信息
const type = {
  "ADD":"ADD_VALUE",
  "DELETE":"DELETE_VALUE"
}
const defaultState = {
    inputValue: '123',
  count:0
};
const actions = {} as any
actions[type.ADD] = (state:any,action:any)=>{
  return {
    ...state,
    count: action.payload
  }
}
actions[type.DELETE] = (state:any,action:any)=>{
  return {
    ...state,
    count: action.payload
  }
}
const reducer = handleActions(actions,defaultState)
export default reducer
// export default (state = defaultState, action) => {
//     return state;
// }

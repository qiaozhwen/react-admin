// import {handleActions} from 'redux-actions'
//state:所有数据信息
const type = {
  "ADD":"ADD_VALUE",
  "DELETE":"DELETE_VALUE"
}
const defaultState = {
    inputValue: '123',
  count:0
};
export default (state = defaultState, action:any) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {...state, count: action.payload}
    default:
      return  {...state}
  }
}

import { legacy_createStore } from "redux"


function counterReducer(state = { value: 0 ,step:1,max:+Infinity}, action) {
    switch (action.type) {
      case 'increment':
        return {...state, value: (state.value + state.step)<=state.max ?state.value + state.step:state.value }
      case 'decrement':
        return {...state, value: (state.value - state.step)>0 ?state.value - state.step:0 }
      case 'reset':
        return { value:0,step:1,max:+Infinity}
      case 'changeStep':
        return {...state, step:action.payload}
      case 'changeMax':
        return {...state, max:action.payload}
      default:
        return state
    }
  }
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let store = legacy_createStore(counterReducer)
  export default store
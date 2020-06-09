import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// redux-sage dva 支付宝
import reducer from './reducer/index';
import clientRequest from '../client/request';


export const getClientStore = () => {
  // 给我们 thunk 函数 会携带额外的参数
  let store = null
  if(!store){
    return store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(clientRequest)))
  } else {
    return store
  }
}
import {combineReducers} from 'redux';

import foo from '../components/Home/FooRedux';

//组合组件reducers并导出
export default combineReducers({
    foo,
});

//导出组件actions
export * from '../components/Home/FooRedux';
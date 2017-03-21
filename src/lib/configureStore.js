'use strict';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunkMiddleware
    )
)(createStore); //传入createStore方法创建高阶函数

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    return store;
}
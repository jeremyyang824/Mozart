'use strict';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import configureStore from './lib/configureStore';
import configureRouter from './lib/configureRouter';

//main factory
export default function native(platform) {
    let App = React.createClass({
        render() {
            const store = configureStore();
            const router = configureRouter();
            
            return (
                <Provider store={store}>
                    {router}
                </Provider>
            );
        }
    });

    AppRegistry.registerComponent('Mozart', () => App);
}
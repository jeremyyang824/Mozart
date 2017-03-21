import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Router, Scene, Reducer, Modal, Switch, Actions, ActionConst} from 'react-native-router-flux';

import Error from '../components/shared/Error';
import Home from '../containers/Home';
import MainMenu from '../containers/MainMenu';

const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#ccc',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 54;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const RouterWithRedux = connect()(Router);
export default function configureRouter() {
    return (
        <RouterWithRedux getSceneStyle={getSceneStyle}>
            <Scene key="modal" component={Modal} >
                <Scene key='root' hideNavBar hideTabBar>
                    <Scene key='home' component={Home} type='replace' hideNavBar={false} 
                            title='Welcomet to Mozart!' titleStyle={{ color: 'blue' }}/>
                    <Scene key="main-menu" component={MainMenu} initial>
                        <Scene key='home1' component={Home} type='replace' 
                            title='Welcomet to Mozart!' titleStyle={{ color: '#007457' }}/>
                    </Scene>
                </Scene>
                <Scene key="error" component={Error} />
            </Scene>
        </RouterWithRedux>
    );
}
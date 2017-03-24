import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Router, Scene, Reducer, Modal, Switch, Actions, ActionConst} from 'react-native-router-flux';

import Error from '../components/shared/Error';
import Home from '../containers/Home';
import MainMenu from '../containers/MainMenu';
import ModalMessage from '../components/shared/ModalMessage';

const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: 'white',
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
                    <Scene key="main-menu" component={MainMenu} initial>
                        <Scene key='home' hideNavBar component={Home} type='replace' />
                    </Scene>
                </Scene>
                <Scene key="messageModal" component={ModalMessage} />
                <Scene key="error" component={Error} />
            </Scene>
        </RouterWithRedux>
    );
}
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Actions} from "react-native-router-flux";

import * as actions from './HomeRedux';
import Foo from '../components/Home/Foo';
import HeadToolBar from '../components/shared/HeadToolBar';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {
    static contextTypes = {
        drawer: React.PropTypes.object.isRequired,
    };
    render() {
        const {home, actions} = this.props
        return (
            <View style={styles.container}>
                <HeadToolBar
                    leftItem = {() => this.renderMainMenu()}
                    titleItem = {() => this.renderTitle()}
                    rightItem = {() => this.renderRight()} />
                <Text>{'这是主页'}</Text>
                <Foo {...home.foo} {...actions} />
            </View>
        );
    };

    renderMainMenu() {
        return(
            <TouchableOpacity
                onPress={() => this.context.drawer.open()}>
                <Icon name="ios-menu" style={styles.navbarLeftItemStyle} size={27} color="#FFF"/>
            </TouchableOpacity>
        );
    }

    renderTitle() {
        return(
            <Text style={styles.navbarTitleItemStyle}>主页</Text>
        );
    }

    renderRight() {
        return(
            <TouchableOpacity
                onPress={() => Actions.messageModal({message: '右按钮'})}>
                <Text style={styles.navbarRightItemStyle}>测试</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: 0,
        padding: 0
    },
    navbarLeftItemStyle: {
        marginLeft:15
    },
    navbarTitleItemStyle: {
        fontSize: 17,
        color:'white'
    },
    navbarRightItemStyle: {
        fontSize:17,
        color:'white',
        marginRight:15
    },
});

export default connect(
    (state, ownProps) => {
        //map state to props
        //debugger;
        return {
            application: state.application,
            home: state.home
        }
    },
    dispatch => {
        //map dispatch to props
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(Home);  
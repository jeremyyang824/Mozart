import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from './HomeRedux';
import Foo from '../components/Home/Foo';

class Home extends React.Component {

    render() {

        const {home, actions} = this.props

        return (
            <View style={styles.container}>
                <Text>{'这是主页'}</Text>
                <Foo {...home.foo} {...actions} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginTop: 80,
        padding: 10
    }
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
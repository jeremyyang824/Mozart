import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from 'react-native-button';

class Foo extends React.Component {
    
    static propTypes = {
        testVal: PropTypes.string.isRequired,
        loadFooValue: PropTypes.func.isRequired,
    };

    render() {
        return (
            <View>
                <Text>{`home.foo.testVal: ${this.props.testVal}`}</Text>
                <Button onPress={this.props.loadFooValue.bind(this, 'ddd')}
                    containerStyle={{padding:10, height:58, overflow:'hidden', borderRadius:4, borderWidth:1, borderColor: '#007457', backgroundColor: 'white'}}
                    style={{fontSize: 28, color: '#007457'}}>测试</Button>
            </View>
        );
    }
}

export default Foo;
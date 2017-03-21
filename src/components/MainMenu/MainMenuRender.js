import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Button from 'react-native-button';

class MainMenuRender extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>上海烟草机械有限公司</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222222',
    /*background: linear-gradient(top, #222, #333) */
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})

export default MainMenuRender;
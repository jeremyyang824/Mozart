import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

var {height: deviceHeight} = Dimensions.get("window");

class ModalMessage extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            offset: new Animated.Value(-deviceHeight)
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.showModal();
    }

    showModal() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: 0
        }).start();
    }

    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: -deviceHeight
        }).start(Actions.pop);
    }

    render() {
        return (
            <Animated.View style={[styles.container, 
                                    {backgroundColor:"rgba(52,52,52,0.5)"},
                                    {transform: [{translateY: this.state.offset}]}]}>
                <View style={{  width:250, 
                                height:250,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor:"white" }}>
                    <Text>{this.props.message}</Text>
                    <Button onPress={this.closeModal}>关闭</Button>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ModalMessage;

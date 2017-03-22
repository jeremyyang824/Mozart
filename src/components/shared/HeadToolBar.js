import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

class HeadToolBar extends React.Component {

    render() {
        return(
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    {this.props.post.title}
                </Text>
                {this.renderPostText()}
                {this.renderSourceButton()}
                <Text style={styles.headerPostDetailsLine}>
                    Title...
                </Text>
                <View style={styles.separator}/>
                <Text style={styles.headerCommentTitle}>
                    {this.props.post.descendants} Comments:
                </Text>
            </View>
        );
    }
}

export default HeadToolBar;
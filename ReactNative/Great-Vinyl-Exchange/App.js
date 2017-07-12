import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class MainTitle extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Welcome to the Great Vinyl Exchange!</Text>
            </View>
        );
    }
}
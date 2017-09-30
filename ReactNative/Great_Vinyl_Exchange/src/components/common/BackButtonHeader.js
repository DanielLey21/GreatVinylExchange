// Import libraries for making a component
import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';


const BackButtonHeader = ({ onPress }) => {
    const { viewStyle, backButtonStyle } = styles;

    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require('../../ui/images/back-arrow.png')} style={backButtonStyle}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    viewStyle: {
        alignSelf: 'flex-start', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 60,
        padding: 15,
        paddingTop: 25,
        elevation: 2,
    },
    backButtonStyle: {
        width: 30,
        height: 30,
    }
};

export { BackButtonHeader };
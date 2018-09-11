import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class Input extends Component {
    render() {
        const { inputStyle, lableStyle, containerStyle } = styles;

        return (
            <View style={containerStyle}>
                <Text style={lableStyle}>{this.props.label}</Text>
                <TextInput
                    autoCorrect={false}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    style={inputStyle}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        )
    }
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    lableStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
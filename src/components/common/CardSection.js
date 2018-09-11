import React, { Component } from 'react';
import { View } from 'react-native';

export default class CardSection extends Component {
    render() {
        return (
            <View style={[styles.constainerStyle, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
};

const styles = {
    constainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};



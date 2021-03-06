import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

export default class Confirm extends Component {
  
    render() {
        const { containerStyle, textStyle, cardSectionStyle } = styles;
        return (
            <Modal
                visible={this.props.visible}
                transparent
                animationType='slide'
                onRequestClose={() => { }}
            >
                <View style={containerStyle}>
                    <CardSection style={cardSectionStyle}>
                        <Text text={textStyle}>{this.props.children}</Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.props.onAccept}>Yes</Button>
                        <Button onPress={this.props.onDecline}>No</Button>
                    </CardSection>
                </View>
            </Modal>
        );
    }
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        possition: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux'
import { emailChanged, passChanged, LoginUser } from '../actions'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'
import Spinner from './common/Spinner'
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPassChange(text) {
        this.props.passChanged(text)
    }
    onButtonPress() {
        const { email, password } = this.props;

        this.props.LoginUser({ email, password });
        Keyboard.dismiss();
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size='large' />
            )
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
        </Button>
        )
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPassChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>

        );
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps,
    { emailChanged, passChanged, LoginUser })
    (LoginForm);



const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

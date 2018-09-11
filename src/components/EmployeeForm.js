import React, { Component } from 'react';
import { StyleSheet, Picker, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import CardSection from './common/CardSection'
import Input from './common/Input'

class EmployeeForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Janko"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Tel"
                        placeholder="555-999"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column', height: 80 }}>
                    <Text style={styles.pickerText}>Izaberi smjenu</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                        style={{ flex: 1 }}
                    >
                        <Picker.Item label="Ponedeljak" value="Ponedeljak" />
                        <Picker.Item label="Utorak" value="Utorak" />
                        <Picker.Item label="Sreda" value="Sreda" />
                        <Picker.Item label="Cetvrtak" value="Cetvrtak" />
                        <Picker.Item label="Petak" value="Petak" />
                        <Picker.Item label="Subota" value="Subota" />
                        <Picker.Item label="Nedelja" value="Nedelja" />
                    </Picker>
                </CardSection>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    pickerText: {
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapStateToProps = (state) => {
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift
    }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);

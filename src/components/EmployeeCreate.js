import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { employeeUpdate, createEmployee } from '../actions'
import EmployeeForm from './EmployeeForm'
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.createEmployee({ name, phone, shift: shift || 'Ponedeljak' })
    }

    render() {
        return (
            <Card>
               <EmployeeForm dosaoSaAdda={true}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
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

export default connect(mapStateToProps,
    { employeeUpdate, createEmployee }
)(EmployeeCreate);

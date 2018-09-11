import React, { Component } from 'react';
import _ from 'lodash'
import Communications from 'react-native-communications'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import EmployeeForm from './EmployeeForm'
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Confirm from './common/Confirm'

class EmployeeEdit extends Component {

    state = {
        showModal: false
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    ononTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, 'Tvoja ovonedjeljna smjena je ' + shift)
    }

    yesPressed() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    noPressed() {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.ononTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Otpusti ga
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => this.yesPressed()}
                    onDecline={() => this.noPressed()}
                >
                    Jesi siguran da zelis izbrisat?
                </Confirm>
            </Card>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift
    }
}

export default connect(mapStateToProps,
    { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);

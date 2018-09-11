import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

export default class Routes extends React.Component {

  render() {

    return (

      <Router>
        <Scene key='root' hideNavBar>

          <Scene key="auth">
            <Scene key="login" component={LoginForm} title='Please Log in' />
          </Scene>

          <Scene key="main">
            <Scene key="employeeList" component={EmployeeList} title='Employees' rightTitle="Add" onRight={()=> Actions.employeeCreate()} initial/>
            <Scene key="employeeCreate" component={EmployeeCreate} title='Create an Employee' />
            <Scene key="employeeEdit" component={EmployeeEdit} title='Edit Employee' />
          </Scene>

        </Scene>
      </Router>
    )
  }
}

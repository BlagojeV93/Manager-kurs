import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux'
import { EmployeesFetch } from '../actions'
import _ from 'lodash'
import ListItem from './ListItem'

class EmployeeList extends Component {

    componentWillMount() {
        this.props.EmployeesFetch();

        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow(employee){
        return <ListItem employee={employee}/>
    }

    render() {

        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

        );
    }
};




const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })

    return { employees }
}

export default connect(mapStateToProps, { EmployeesFetch })(EmployeeList);

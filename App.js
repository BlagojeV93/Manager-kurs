import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Routes from './src/Routes'


export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBfVIOVTNQ6WNAq-wUFZAeJdil1x7WurJM",
      authDomain: "manager-63237.firebaseapp.com",
      databaseURL: "https://manager-63237.firebaseio.com",
      projectId: "manager-63237",
      storageBucket: "manager-63237.appspot.com",
      messagingSenderId: "163074961225"  
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

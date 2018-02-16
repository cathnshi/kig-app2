import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import * as firebase from 'firebase';
import { Root, Tabs } from '../config/router';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      authenticating: false,
    }
  }


  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCTc6-IT_V_Y8k7Yqpib876WXVkD4yhLDM",
      authDomain: "kig-app-17e67.firebaseapp.com",
      databaseURL: "https://kig-app-17e67.firebaseio.com",
      projectId: "kig-app-17e67",
      storageBucket: "kig-app-17e67.appspot.com",
      messagingSenderId: "562819550250"
    }
    
    firebase.initializeApp(firebaseConfig);
  }

  componenetDidMount() {
      this._loadInitialState().done
  }

  onPressSignIn() {
    this.setState({
      authenticating: true,
    })
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.setState({authenticating: false});
        this.props.navigation.navigate('Tabs');
    })
    .catch(() => {
        this.setState({error: 'Authentication failed', authenticating: false});
    })
  }

  onPressSignUp() {
    this.setState({
      authenticating: true,
    })
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        this.setState({authenticating: false});
        this.props.navigation.navigate('Tabs');
    })
    .catch(() => {
        this.setState({error: 'Authentication failed', authenticating: false});
    })
  }

  renderCurrentState() {
    if(this.state.authenticating) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.form}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}
      >
        <Input 
          placeholder='Enter your email...'
          label='Email'
          onChangeText={email => this.setState({ email })}
        />
        <Input 
          placeholder='Enter your password...'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Text>{this.state.error}</Text>
        <Button onPress={() => this.onPressSignIn()}>Log In</Button>
        <Button onPress={() => this.onPressSignUp()}>Sign Up</Button>
        </LinearGradient>
      </View>
      
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
     // <Tabs />
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  form: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})
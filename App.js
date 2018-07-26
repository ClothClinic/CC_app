import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    state = {
      fullName: '',
      phone   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Verification", "Hey, check your phone for OTP!");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVGhD5dlLqE1RHMfx4y2FFEkmHikJKQMlZeSVRx4TA48BJh4DI4pEJqKMZKAM5FlCRErMJAYkJcVIyQRRXpHX9zc4ddr91jl739Y5+3/zq8/kdu7Zv733unevtXajQqbgME5gsX7QH7MJX/G3xWkMQr/IABzEH7SeRJPuTvgMxwW4E2i1DmGjIXMdrnjRR0xEyGjIuNIp1xAuK+HKdqLfC5OheA1XtJPnGIwQ2QZXsqytCJFHcAXLeozaMxmuXFXjUGs2wBWrahZqzXG4YlXV/ky5BFesigeoPXfgypX1CTNRe+7BFSzjPeYjRC7DlezkJaYhTE7CFW3nLEYiVHbAlU25Aq1XwmUuXOGUOQgZTfg+w5V2Qt6NZs7DlXbGI2yWw5V21iNshuAtXPEiPXdCZw9ccUd3MGxGQRsKrniRHobDEDYH4Io7+mzYjEDZtfsvLEHYrIUr7nyAVphhcxuuuPMEupMhMwGaorvizi1oSylk1sCVTtFksi+79GOxG2egnU4dN/tFOQVXOuUcqpzMCrxD8XteYRGyRTvzD1E8UDtXUWatsgv6z+e+Q37jCLLtYmp35A3cwVJeYDpSqfK80pRoDLJkHr7DHSjlC/ZhNJrR2D8G9/l2dGEmIUtWo91QSNEJ3cUNuL+HsvSgnoos2YLU67he0BDPdmeqzJK74T6yZS/cQXplIbJlO+oaZjuRNRvxA+5g3bQA2aMt07LL5By0Odi16KFZdQbQFxfR9cmpphL70a2hdhQ93VPTm6ucd+cnNC+rJbpyq/AMrlxZesk6G7VnIJZB0/tvcGWdp9iMMO/vW6PtpqU4hJvQ8NO2kujVnbZttcCagf8tjcY/2tImBsXPeGQAAAAASUVORK5CYII='}}/>
          <TextInput style={styles.inputs}
              placeholder="Phone Number"
              underlineColorAndroid='transparent'
              onChangeText={(phone) => this.setState({phone})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,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'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#000000",
  },
  signUpText: {
    color: 'white',
  }
});
 
import React, { Component } from 'react';
import { View, Text, Image, Keyboard  } from 'react-native';
import { connect } from 'react-redux';

import { BackButtonHeader, InputField, LinkButton } from '../../components/common';
import { Style, em } from '../../styles/styles';

class AuthenticationSignUpEmail extends Component {
    state = {
      email: '', 
      emailError: false, 
      emailErrorMessage: 'Please enter a valid email address'
    }; 
    
    constructor(props) {
      super(props);
    }

    onBackButtonPress() {
      this.props.navigation.goBack();
    }

    onNextButtonPress() {
      this.setState({ emailError: false })
      if (this.isEmailValid()) {
        Keyboard.dismiss()
        this.props.navigation.navigate('AuthenticationMain');
      } else {
        this.setState({ emailError: true })
      }
    }

    isEmailValid() {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.state.email);
    }

    render() {
      const { backgroundImageContainer, inputContainer, buttonContainer } = styles
      return (
          <Image source={require('../../ui/images/authentication_bg.jpg')} style={styles.backgroundImageContainer}>
              <BackButtonHeader onPress={this.onBackButtonPress.bind(this)} />
              
              <View style={styles.inputContainer}>
                <InputField 
                  onChangeText={email => this.setState({ email })}
                  onSubmitEditing={this.onNextButtonPress.bind(this)}
                  value={this.state.email}
                  label={!this.state.emailError ? "We won't share it with anyone" : this.state.emailErrorMessage}
                  showError={this.state.emailError}
                />
              </View>

              <View style={styles.buttonContainer}>
                <LinkButton 
                  style={styles.buttonContainer} 
                  onPress={this.onNextButtonPress.bind(this)}>
                      Next
                </LinkButton>
              </View>  
          </Image>
    )};
}

const styles = {
  backgroundImageContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .8,
  },
  inputContainer: {
    marginTop: em(4.75),
    flex: 1,
  },
  buttonContainer: {
    // THIS NEEDS TO BE FIXED - find fix for Android
    marginBottom: em(21),
    flex: 1,
  }
}

export default connect(null, )(AuthenticationSignUpEmail);
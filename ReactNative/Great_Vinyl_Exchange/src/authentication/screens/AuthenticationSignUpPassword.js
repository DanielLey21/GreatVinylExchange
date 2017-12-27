import React, { Component } from 'react';
import { View, ImageBackground, Keyboard  } from 'react-native';
import { connect } from 'react-redux';

import { BackButtonHeader, InputField, LinkButton } from '../../common-components';
import { em } from '../../styles/styles';
import { setPassword } from '../AuthenticationActions';

class AuthenticationSignUpPassword extends Component {
  state = {
    password: '', 
    passwordError: false, 
    passwordErrorMessage: 'Your password must be a least 8 characters long'
  }; 
  
  constructor(props) {
    super(props);
  }

  onBackButtonPress() {
    this.props.navigation.goBack();
  }

  onNextButtonPress() {
    this.setState({ passwordError: false })
    if (this.isPasswordValid()) {
      Keyboard.dismiss()
      this.props.setPassword(this.state.password);
      this.props.navigation.navigate('AuthenticationSignUpConfirmPassword');
    } else {
      this.setState({ passwordError: true })
    }
  }

  isPasswordValid() {
      return this.state.password.length >= 8;
  }

  render() {
    const { backgroundImageContainer, inputContainer, buttonContainer } = styles
    return (
      <ImageBackground source={require('../../resources/images/authentication_bg.jpg')} style={backgroundImageContainer}>
          <BackButtonHeader onPress={this.onBackButtonPress.bind(this)} />
          
          <View style={inputContainer}>
            <InputField 
              onChangeText={password => this.setState({ password })}
              onSubmitEditing={this.onNextButtonPress.bind(this)}
              placeholder="Enter your password"
              value={this.state.password}
              label={!this.state.passwordError ? "Make it a good one" : this.state.passwordErrorMessage}
              showError={this.state.passwordError}
              secureTextEntry={true}
            />
          </View>

          <View style={buttonContainer}>
            <LinkButton 
              style={buttonContainer} 
              onPress={this.onNextButtonPress.bind(this)}>
                  Next
            </LinkButton>
          </View>  
      </ImageBackground>
    );
  }
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
    marginBottom: em(21),
    flex: 1,
  }
}

export default connect(null, { setPassword })(AuthenticationSignUpPassword);
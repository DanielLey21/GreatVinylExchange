import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Keyboard  } from 'react-native';
import { connect } from 'react-redux';

import { BackButtonHeader, InputField, OrangeButton } from '../../components/common';
import { Style, em } from '../../styles/styles';
import { setPassword } from '../../actions';

class AuthenticationSignUpConfirmPassword extends Component {
    state = {
      confirmPassword: '', 
      confirmPasswordError: false, 
      confirmPasswordErrorMessage: "Your paswords don't match",
    }; 
    
    constructor(props) {
      super(props);
    }

    onBackButtonPress() {
      this.props.navigation.goBack();
    }

    onJoinButtonPress() {
      this.setState({ confirmPasswordError: false })
      console.log("In Next Button Function");
      if (this.isConfirmPasswordValid()) {
        Keyboard.dismiss()
        console.log("valid password");
        //this.props.setPassword(this.state.password);
        // TODO: Submit to Realm for authentication sign up
        this.props.navigation.navigate('AuthenticationMain');
      } else {
        console.log("invalid password");
        this.setState({ confirmPasswordError: true })
      }
    }

    isConfirmPasswordValid() {
        return this.state.confirmPassword == this.props.password;
    }

    render() {
      const { backgroundImageContainer, inputContainer, buttonContainer } = styles
      return (
          <ImageBackground source={require('../../ui/images/authentication_bg.jpg')} style={styles.backgroundImageContainer}>
              <BackButtonHeader onPress={this.onBackButtonPress.bind(this)} />
              
              <View style={styles.inputContainer}>
                <InputField 
                  onChangeText={confirmPassword => this.setState({ confirmPassword })}
                  onSubmitEditing={this.onNextButtonPress.bind(this)}
                  placeholder="Re-enter your password"
                  value={this.state.confirmPassword}
                  label={!this.state.confirmPasswordError ? "To help you remember" : this.state.confirmPasswordErrorMessage}
                  showError={this.state.confirmPasswordError}
                  secureTextEntry={true}
                />
              </View>

              <View style={styles.buttonContainer}>
                <OrangeButton 
                  style={styles.buttonContainer} 
                  onPress={this.onJoinButtonPress.bind(this)}>
                      Join the Great Vinyl Exchange
                </OrangeButton>
              </View>  
          </ImageBackground>
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
    marginBottom: em(21),
    flex: 1,
  }
}

const mapStateToProps = ({ authentication }) => {
    // state.authentication.email 
    const { password } = authentication;
    return {
        password: password,
    }
};

export default connect(mapStateToProps, { setPassword })(AuthenticationSignUpConfirmPassword);
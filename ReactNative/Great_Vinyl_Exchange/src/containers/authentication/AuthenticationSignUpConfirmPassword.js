import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  Image, 
  Keyboard, 
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import { BackButtonHeader, InputField, OrangeButton, Spinner } from '../../components/common';
import { Style, em } from '../../styles/styles';
import { setPassword, registerUser } from '../../actions';
import User from '../../models/User';

class AuthenticationSignUpConfirmPassword extends Component {
    
    state = {
      confirmPassword: '', 
      confirmPasswordError: false, 
      confirmPasswordErrorMessage: "Your paswords don't match",
      firebaseError: this.props.firebaseError,
    }; 

    constructor(props) {
      super(props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.firebaseError !== null) {
        this.setState({
          firebaseError: nextProps.firebaseError,
        });
      }
    }

    onBackButtonPress() {
      this.props.navigation.goBack();
    }

    onJoinButtonPress() {
      this.setState({ confirmPasswordError: false })
      if (this._isConfirmPasswordValid()) {
        const { email, address, username } = this.props;
        Keyboard.dismiss()
        this.props.setPassword(this.state.confirmPassword);
        const user = { 
          email,
          username,
          address,
        }; 
        this.props.registerUser(user, this.state.confirmPassword);
      } else {
        this.setState({ confirmPasswordError: true })
      }
    }

    _isConfirmPasswordValid() {
        return this.state.confirmPassword == this.props.password;
    }

    _displaySubtitleLabel() {
      if (this.state.confirmPasswordError) {
        return this.state.confirmPasswordErrorMessage;
      } else if (this.props.firebaseError) {
        return 'Please fix the errors';
      }

      return "To help you remember";
    }

    _renderAuthenticationAlertMessage() {
      const { firebaseError } = this.props;
      return Alert.alert(firebaseError.message);
    }

    _renderSpinner() {
      return (<Spinner size="large" />);
    }

    render() {
        const { backgroundImageContainer, inputContainer, buttonContainer } = styles

        if (this.props.isLoading) {
          return (
            <ImageBackground source={require('../../ui/images/authentication_bg.jpg')} style={styles.backgroundImageContainer}>
              <View>
                {this.props.isLoading && this._renderSpinner()}
              </View>
            </ImageBackground>
          );
        }

        return (
          <ImageBackground source={require('../../ui/images/authentication_bg.jpg')} style={styles.backgroundImageContainer}>
              <BackButtonHeader onPress={this.onBackButtonPress.bind(this)} />
              
              <View style={styles.inputContainer}>
                <InputField 
                  onChangeText={confirmPassword => this.setState({ confirmPassword })}
                  onSubmitEditing={this.onJoinButtonPress.bind(this)}
                  placeholder="Re-enter your password"
                  value={this.state.confirmPassword}
                  label={this._displaySubtitleLabel()}
                  showError={!!this.state.confirmPasswordError || !!this.props.firebaseError}
                  secureTextEntry={true}
                />
              </View>

              <View>
                {this.props.isLoading && this._renderSpinner()}
              </View>

              <View style={styles.buttonContainer}>
                <OrangeButton 
                  style={styles.buttonContainer} 
                  onPress={this.onJoinButtonPress.bind(this)}>
                      Join the Great Vinyl Exchange
                </OrangeButton>
              </View>  

              <View>
                {this.props.firebaseError && this._renderAuthenticationAlertMessage()}
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

const mapStateToProps = ({ authentication }) => {
    const { email,
            password,
            username,
            address,
            firebaseError, 
            isLoading,
            isResponseSuccessful,
     } = authentication;
    return {
        email,
        password,
        username,
        address,
        firebaseError,
        isLoading,
        isResponseSuccessful,
    };
};

export default connect(mapStateToProps, { setPassword, registerUser })(AuthenticationSignUpConfirmPassword);
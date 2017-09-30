import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Keyboard  } from 'react-native';
import { connect } from 'react-redux';

import { BackButtonHeader, InputField, LinkButton } from '../../components/common';
import { Style, em } from '../../styles/styles';
import { setUsername } from '../../actions';

class AuthenticationSignUpUsername extends Component {
    state = {
      userName: '', 
    }; 
    
    constructor(props) {
      super(props);
    }

    onBackButtonPress() {
      this.props.navigation.goBack();
    }

    onNextButtonPress() {
      Keyboard.dismiss()
      this.props.setUsername(this.state.userName);
      this.props.navigation.navigate('AuthenticationMain');
    }

    render() {
      const { backgroundImageContainer, inputContainer, buttonContainer } = styles
      return (
          <ImageBackground source={require('../../ui/images/authentication_bg.jpg')} style={styles.backgroundImageContainer}>
              <BackButtonHeader onPress={this.onBackButtonPress.bind(this)} />
              
              <View style={styles.inputContainer}>
                <InputField 
                  onChangeText={userName => this.setState({ userName })}
                  onSubmitEditing={this.onNextButtonPress.bind(this)}
                  placeholder="Enter your display name"
                  value={this.state.userName}
                  label={"This is what your exchange group sees"}
                  showError={false}
                />
              </View>

              <View style={styles.buttonContainer}>
                <LinkButton 
                  style={styles.buttonContainer} 
                  onPress={this.onNextButtonPress.bind(this)}>
                      Next
                </LinkButton>
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
    const { email } = authentication;
    return {
        email: email,
    }
};

export default connect(mapStateToProps, { setUsername })(AuthenticationSignUpUsername);
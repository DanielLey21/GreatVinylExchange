import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Keyboard  } from 'react-native';
import { connect } from 'react-redux';

import { BackButtonHeader, InputField, LinkButton } from '../../components/common';
import { Style, em } from '../../styles/styles';
import { setAddress } from '../../actions';

class AuthenticationSignUpAddress extends Component {
    state = {
      address: '', 
    }; 
    
    constructor(props) {
      super(props);
    }

    onBackButtonPress() {
      this.props.navigation.goBack();
    }

    onNextButtonPress() {
      Keyboard.dismiss()
      this.props.setAddress(this.state.address);
      this.props.navigation.navigate('AuthenticationSignUpPassword');
    }

    render() {
      const { backgroundImageContainer, inputContainer, buttonContainer } = styles
      return (
          <ImageBackground source={require('../../ui/images/authentication_bg.jpg')} style={styles.backgroundImageContainer}>
              <BackButtonHeader onPress={this.onBackButtonPress.bind(this)} />
              
              <View style={styles.inputContainer}>
                <InputField 
                  onChangeText={address => this.setState({ address })}
                  onSubmitEditing={this.onNextButtonPress.bind(this)}
                  placeholder="Enter the address you would like your records sent to"
                  value={this.state.address}
                  label={"Street Address, City, State Zipcode"}
                  showError={false}
                  multiline={true}
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

export default connect(mapStateToProps, { setAddress })(AuthenticationSignUpAddress);
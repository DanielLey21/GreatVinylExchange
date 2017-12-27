import React, { Component } from 'react';
import { View, ImageBackground, Keyboard  } from 'react-native';
import { connect } from 'react-redux';

import { BackButtonHeader, InputField, LinkButton } from '../../common-components';
import { em } from '../../styles/styles';
import { setAddress } from '../AuthenticationActions';

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
        <ImageBackground source={require('../../resources/images/authentication_bg.jpg')} style={backgroundImageContainer}>
            <BackButtonHeader onPress={this.onBackButtonPress.bind(this)} />
            
            <View style={inputContainer}>
              <InputField 
                onChangeText={address => this.setState({ address })}
                onSubmitEditing={this.onNextButtonPress.bind(this)}
                placeholder="Enter your preferred address"
                value={this.state.address}
                label={"Where do you want your records sent to?\nStreet Address, City, State Zipcode"}
                showError={false}
                multiline={true}
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

const mapStateToProps = ({ authentication }) => {
    const { email } = authentication;
    return {
        email: email,
    }
};

export default connect(mapStateToProps, { setAddress })(AuthenticationSignUpAddress);
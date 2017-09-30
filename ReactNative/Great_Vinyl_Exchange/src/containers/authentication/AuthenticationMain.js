import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { OrangeButton } from '../../components/common';
import { Style, em } from '../../styles/styles';
import { signUpBegin } from '../../actions';


class AuthenticationMain extends Component {

  onSignUpButtonPress() {
    this.props.navigation.navigate('AuthenticationSignUpEmail');
  }
  
  render() {
      return (
        <Image source={require('../../ui/images/authentication_bg.jpg')} style={styles.backgroundImageContainer}>
          <View style={styles.viewContainer}>

            <View style={styles.logoImageContainer}>
              <Image source={require('../../ui/images/gve_logo.png')} style={styles.logoImage} />
            </View>

            <View style={styles.titleLabelContainer}>
              <Text style={styles.titleLabel}>THE GREAT</Text>
              <Text style={styles.titleLabel}>VINYL</Text>
              <Text style={styles.titleLabel}>EXCHANGE</Text>
            </View>

            <OrangeButton
                style={styles.buttonContainer} 
                onPress={this.onSignUpButtonPress.bind(this)}>
                    SignUp  
            </OrangeButton>

            <View style={styles.signInTextContainer}>
              <Text style={styles.signInPrimaryText}>Already have an account? </Text>
              <Text style={styles.signInSecondaryText}>Sign in</Text>
            </View>

          </View>
        </Image>
      );
    }
}

const styles = {
  backgroundImageContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    opacity: .9,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: Style.DEVICE_HEIGHT * 0.80
  },
  logoImageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: em(5),
    marginBottom: em(12)
  },
  logoImage: {
    resizeMode: 'contain',
    width: 223,
    height: 198,
  },
  titleLabelContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: em(11),
  },
  titleLabel: {
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontWeight: '400'
  },
  buttonContainer: {
    flex: 1,
    width: null,
  },
  signInTextContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: em(4),
  },
  signInPrimaryText: {
    color: '#454651'
  },
  signInSecondaryText: {
    color: '#ffffff'
  }
};

const mapStateToProps = ({ authentication }) => { 
    const { currentScene } = authentication;
    return {
        navigation: currentScene,
    }
};

export default connect(null, { signUpBegin })(AuthenticationMain);;


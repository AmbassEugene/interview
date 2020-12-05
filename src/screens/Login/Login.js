import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScreenBase} from '..';
import {AppBtn, AppText, Space, Wrap} from '../../components';
import styled from 'styled-components';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {logEvent} from '../../utils/analytics';
import analytics from '@react-native-firebase/analytics';

const Wrapper = styled(Wrap)`
  justify-content: center;
  align-items: center;
`;

const LoginBase = ({navigation}) => {
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();

      // Get the users accessToken
      const {accessToken} = await GoogleSignin.getTokens();

      // Create a Google credential with the token
      const googleCredential = await auth.GoogleAuthProvider.credential(
        null,
        accessToken,
      );

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      setGoogleLoading(false);

      // show success toast
      alert('Signin successful!');
      // navigate to product page
      navigation.navigate('Product');
      // Send analytics event
      logEvent({
        name: 'login',
        description: {
          action: 'user logged in',
        },
      });
    } catch (error) {
      console.log('An error occured', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        alert(
          'An error occured while signing you in. Please try again later',
          error,
        );
      }
      setGoogleLoading(false);
    }
  };

  const logScreen = async () => {
    await analytics().logScreenView({
      screen_name: currentRouteName,
      screen_class: currentRouteName,
    });
  };

  useEffect(() => {
    logScreen();
  }, []);

  return (
    <ScreenBase>
      <Wrapper>
        <AppText>Welcome. Login to enjoy our app</AppText>
        <Space />
        <AppBtn onPress={handleGoogleSignIn}>
          <AppText color="#fff">Login with Google</AppText>
        </AppBtn>
      </Wrapper>
    </ScreenBase>
  );
};

export {LoginBase as LoginScreen};

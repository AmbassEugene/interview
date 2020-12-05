import React from 'react';
import {View, Text} from 'react-native';
import {ScreenBase} from '..';
import styled from 'styled-components';
import {AppBtn, AppText, Space, Wrap} from '../../components';
import {
  GoogleSignin,
  isGoogleSignedIn,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {logEvent} from '../../utils/analytics';

const Wrapper = styled(Wrap)`
  justify-content: center;
`;

const CheckoutScreenBase = ({navigation}) => {
  const signOut = async () => {
    try {
      if (isGoogleSignedIn) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      await auth().signOut();
      navigation.navigate('Login');

      // log analytiics event
      logEvent({
        name: 'logout',
        description: {
          id: 3745092,
          item: 'Amazing Invincible White Tee',
          description: ['round neck', 'short sleeved'],
          size: 'L',
          amount: 1500,
        },
      });

      // TODO: show toast for success signout
      alert('Signout successful');
    } catch (error) {
      console.error('An error occured while signing out', error);
    }
  };

  return (
    <ScreenBase>
      <Wrapper>
        <AppText>Your Order has been placed successfully!</AppText>
        <Space size="50px" />
        <AppBtn onPress={signOut}>
          <AppText color="white">Logout</AppText>
        </AppBtn>
      </Wrapper>
    </ScreenBase>
  );
};

export {CheckoutScreenBase as CheckoutScreen};

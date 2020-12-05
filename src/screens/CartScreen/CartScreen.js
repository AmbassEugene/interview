import React from 'react';
import {View, Text} from 'react-native';
import {ScreenBase} from '..';
import {AppBtn, AppText, FlexBetween, Space, Wrap} from '../../components';
import styled from 'styled-components';
import tshirt from '../../../assets/tshirt.jpg';
import {logEvent} from '../../utils/analytics';

const ImageView = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

const CartScreenBase = ({navigation}) => {
  const handleOnPress = () => {
    logEvent({
      name: 'purchase',
      description: {
        id: 3745092,
        item: 'Amazing Invincible White Tee',
        description: ['round neck', 'short sleeved'],
        size: 'L',
        amount: 1500,
      },
    });
    navigation.navigate('Checkout');
  };
  return (
    <ScreenBase>
      <Wrap>
        <FlexBetween>
          <ImageView source={tshirt} />

          <AppText>Amazing Invincible White Tee</AppText>
          <AppText bold>Rs 1, 500</AppText>
        </FlexBetween>
        <Space size="50px" />
        <AppBtn onPress={handleOnPress}>
          <AppText color="#fff">Checkout</AppText>
        </AppBtn>
      </Wrap>
    </ScreenBase>
  );
};

export {CartScreenBase as CartScreen};

import React from 'react';
import {View, Text} from 'react-native';
import {ScreenBase} from '..';
import styled from 'styled-components';
import {AppBtn, AppText, Space, Wrap} from '../../components';
import shirt from '../../../assets/tshirt.jpg';
import {logEvent} from '../../utils/analytics';

const Wrapper = styled(Wrap)`
  align-items: center;
`;

const ImageView = styled.Image`
  width: 90%;
  height: 300px;
`;

const ProductScreenBase = ({navigation}) => {
  const handleOnPress = () => {
    logEvent({
      name: 'addToCart',
      description: {
        id: 3745092,
        item: 'Amazing Invincible White Tee',
        description: ['round neck', 'short sleeved'],
        size: 'L',
        amount: 1500,
      },
    });
    navigation.navigate('Cart');
  };
  return (
    <ScreenBase>
      <Wrapper>
        <ImageView source={shirt} />
        <Space />
        <AppText>Amazing Invincible White Tee</AppText>
        <AppText bold>Rs 1,500</AppText>
        <Space />
        <Space />
        <AppBtn onPress={handleOnPress}>
          <AppText color="#fff">Add to Cart</AppText>
        </AppBtn>
      </Wrapper>
    </ScreenBase>
  );
};

export {ProductScreenBase as ProductScreen};

import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled.View`
  padding: 10px 15px;
  background-color: #fff;
  flex: 1;
`;

const ScreenBase = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export {ScreenBase};

import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style.js';

export const ScreenHeader = (props) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

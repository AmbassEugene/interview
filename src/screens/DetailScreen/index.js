import React from 'react';
import {View} from 'react-native';
import {ListItem} from '../../components/ListItem';
import {connect} from 'react-redux';

export const Details = (props) => {
  const {userDetails} = props;
  return (
    <View>
      <ListItem data={userDetails} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.details.userDetails,
  };
};

export const DetailScreen = connect(mapStateToProps, null)(Details);

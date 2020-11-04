import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {randomColors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getUserDetails} from '../../redux/actions/details';
import {styles} from './style.js';

const Items = (props) => {
  const {data, getUserDetails} = props;
  const navigation = useNavigation();
  const backgroundColor = randomColors();

  const handlePress = () => {
    getUserDetails(data), navigation.navigate('Details');
  };

  return (
    <TouchableOpacity style={styles.wrap} onPress={handlePress}>
      <View style={{backgroundColor, ...styles.logo}}>
        <Text style={styles.logoText}>{data.name.charAt(0)}</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text>{data.name}</Text>
        <Text>{data.categoryName}</Text>
        <Text>{data.location}</Text>
        <Text style={styles.preference}>{data.classLocPref}</Text>
      </View>
      <View style={styles.actions}>
        <Text style={styles.actionText}>10 hours ago</Text>
        <View>
          <Icon
            name="mobile1"
            size={25}
            color={backgroundColor}
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (data) => dispatch(getUserDetails(data)),
  };
};

export const ListItem = connect(null, mapDispatchToProps)(Items);

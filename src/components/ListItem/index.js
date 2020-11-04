import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {randomColors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getUserDetails} from '../../redux/actions/details';

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
        <Text>{data.classLocPref}</Text>
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

const mapStateToProps = (state) => {
  return {
    // loginData: state.auth.loginData,
    // loginError: state.auth.loginError,
  };
};

export const ListItem = connect(mapStateToProps, mapDispatchToProps)(Items);

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 0.4,
    padding: 10,
  },
  logo: {
    marginRight: 10,
    marginTop: 5,
    height: 35,
    width: 35,
    borderRadius: 35,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    marginTop: 4,
    color: '#fff',
  },
  detailsWrap: {
    marginRight: 10,
    flex: 2,
  },
  actions: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    opacity: 0.6,
  },
  icon: {
    marginTop: 20,
  },
});

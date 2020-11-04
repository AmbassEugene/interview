import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {randomColors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export const ListItem = (props) => {
  const {data} = props;
  const navigation = useNavigation();
  const backgroundColor = randomColors();

  console.log(navigation);

  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={() => navigation.navigate('Details')}>
      <View style={{backgroundColor, ...styles.logo}}>
        <Text style={styles.logoText}>N</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text>{data.name || 'Ambass Eugene'}</Text>
        <Text>{data.categoryName || 'BTM Layout 2nd Stage'}</Text>
        <Text>{data.location || 'Marathalli'}</Text>
        <Text>{data.classLocPref || 'Online'}</Text>
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

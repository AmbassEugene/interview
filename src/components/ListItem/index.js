import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {randomColors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export const ListItem = (props) => {
  const {data, navigation} = props;
  const backgroundColor = randomColors();

  return (
    <TouchableOpacity style={styles.wrap}>
      <View style={{backgroundColor, ...styles.logo}}>
        <Text style={styles.logoText}>N</Text>
      </View>
      <View style={styles.detailsWrap}>
        <Text>{data.item.name}</Text>
        <Text>{data.item.categoryName}</Text>
        <Text>{data.item.location}</Text>
        <Text>{data.item.classLocPref}</Text>
      </View>
      <View style={styles.actions}>
        <Text style={styles.actionText}>10 hours ago</Text>
        <View>
          <Icon
            name="mobile1"
            size={30}
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
    // justifyContent: 'center',
    marginRight: 10,
    marginTop: 5,
    // padding: 10,
    // backgroundColor: randomColors(),
    height: 35,
    width: 35,
    borderRadius: 35,
    alignItems: 'center',
  },
  logoText: {
    // fontWeight: 'bold',
    fontSize: 18,
    marginTop: 4,
    color: '#fff',
    // height: 'auto',
  },
  detailsWrap: {
    marginRight: 10,
    flex: 2,
    // backgroundColor: randomColors(),
  },
  actions: {
    // justifyContent: "center"
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

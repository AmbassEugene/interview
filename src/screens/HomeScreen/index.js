import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ListItem} from '../../components/ListItem';

export const HomeScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const fetchUsers = async () => {
    try {
      const result = await fetch(
        'http://www.mocky.io/v2/5c41920e0f0000543fe7b889',
      );
      const users = await result.json();
      setData(users.dataList);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <View style={styles.wrap}>
      {!!data ? (
        <FlatList
          data={data}
          renderItem={(item) => <ListItem data={item.item} />}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {},
});

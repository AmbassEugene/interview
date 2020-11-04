import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from '../../components/ListItem';
import {connect} from 'react-redux';
import {fetchUsers} from '../../redux/actions/home';

export const Home = ({navigation, ...props}) => {
  const {fetchUsers, users} = props;

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View>
      {!!users ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={users.dataList}
          renderItem={(item) => <ListItem data={item.item} />}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.home.allUsers,
  };
};

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);

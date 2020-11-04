import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {StyleSheet, View, Text} from 'react-native';

const Stack = createStackNavigator();

export const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false}>
        <Stack.Screen
          options={{
            headerTitle: (props) => (
              <ScreenHeader title={'ENQUIRIES'} {...props} />
            ),
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          headerShown={false}
          name="Details"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ScreenHeader = (props) => {
  return (
    <View style={styles.wrap}>
      {/* <Text style={styles.back}>Back</Text> */}
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 22,
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  back: {
    color: 'purple',
  },
});

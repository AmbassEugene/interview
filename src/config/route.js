import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {ScreenHeader} from '../components/ScreenHeader';

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

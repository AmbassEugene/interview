import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {ScreenHeader} from '../components/ScreenHeader';
import {LoginScreen} from '../screens/Login/Login';
import {CartScreen} from '../screens/CartScreen/CartScreen';
import {ProductScreen} from '../screens/ProductScreen/ProductScreen';
import {CheckoutScreen} from '../screens/Checkout/CheckoutScreen';
import analytics from '@react-native-firebase/analytics';

const Stack = createStackNavigator();

export const Route = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator>
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen component={CartScreen} name="Cart" />
        <Stack.Screen component={ProductScreen} name="Product" />
        <Stack.Screen component={CheckoutScreen} name="Checkout" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

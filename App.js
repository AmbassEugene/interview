import React, {useEffect} from 'react';
import {Route} from './src/config/route';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {GoogleSignin} from '@react-native-community/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from './src/navigation/baseNavigation';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
  </Provider>
  );
};


export default App;

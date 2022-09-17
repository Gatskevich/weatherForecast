import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from './src/navigation/baseNavigation';
import store from './src/redux/store';

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

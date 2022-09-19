import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../screens/Main/Main';
import { AddButton } from '../components/AddButton/AddButton';
import { HeaderTitle } from '../components/HeaderTitle/HeaderTitle';

const TodayStack = createStackNavigator();

export const StackScreen = () => (
	<TodayStack.Navigator
		screenOptions={{
			cardStyle: { backgroundColor: 'transparent' },
			cardStyleInterpolator: ({ current: { progress } }) => ({
				cardStyle: {
					opacity: progress.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 1],
					}),
				},
				overlayStyle: {
					opacity: progress.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 0.5],
						extrapolate: 'clamp',
					}),
				},
			}),
		}}>
		<TodayStack.Screen
			name="Weather forecast"
			component={Main}
			options={{
				headerTitle: () => <HeaderTitle text={'Weather forecast'} />,
				headerRight: () => <AddButton size={40} />,
				headerStyle: {
					backgroundColor: '#00e4d0',
				},
			}}
		/>
	</TodayStack.Navigator>
);

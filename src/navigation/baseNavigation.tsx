import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Today } from '../screens/Today';

const TodayStack = createStackNavigator();

export const StackScreen = () => (
	<TodayStack.Navigator
		screenOptions={{
			headerShown: false,
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
		<TodayStack.Screen name="Today" component={Today} />
	</TodayStack.Navigator>
);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../screens/Main/Main';
import { SearchCity } from '../screens/Search/SearchCity';
import { AddButton } from '../components/AddButton/AddButton';
import { HeaderTitle } from '../components/HeaderTitle/HeaderTitle';
import { ImageBackground } from 'react-native';
import { assetList } from '../assets';
import { styles } from './style';

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
			name="Main"
			component={Main}
			options={{
				headerTitle: () => <HeaderTitle text={'Weather forecast'} />,
				headerRight: () => <AddButton size={40} />,
				headerBackground: () => (
					<ImageBackground
						source={assetList.images.allSeasons}
						style={styles.image}
						resizeMode="cover"
					/>
				),
			}}
		/>
		<TodayStack.Screen
			name="SearchCity"
			component={SearchCity}
			options={{ headerShown: false }}
		/>
	</TodayStack.Navigator>
);

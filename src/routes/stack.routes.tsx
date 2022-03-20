import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import Colors from '../styles/colors';
import Search from '../pages/search';
import FullProfile from '../pages/fullProfile';
import ShortProfile from '../pages/shortProfile';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
	<stackRoutes.Navigator
		screenOptions={{
			title: 'SearchGithub',
			headerStyle: {
				backgroundColor: Colors.blue5,
			},
			headerTintColor: Colors.blue0,
			headerTitleAlign: 'center',
			headerTransparent: false,
			headerBackImage: () => (
				<Entypo
					name="arrow-left"
					color={Colors.blue0}
					style={{ fontSize: 25 }}
				/>
			),
		}}
	>
		<stackRoutes.Screen name="Search" component={Search} />
		<stackRoutes.Screen name="ShortProfile" component={ShortProfile} />
		<stackRoutes.Screen name="FullProfile" component={FullProfile} />
	</stackRoutes.Navigator>
);

export default AppRoutes;

import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import Colors from '@styles/colors';
import Search from '@pages/search';
import FullProfile from '@pages/fullProfile';
import ShortProfile from '@pages/shortProfile';

const { Navigator, Screen } = createStackNavigator();

const arrowGoBack = () => (
	<Entypo name="arrow-left" color={Colors.blue0} style={{ fontSize: 25 }} />
);

const screenOptions: StackNavigationOptions = {
	title: 'SearchGithub',
	headerStyle: { backgroundColor: Colors.blue5 },
	headerTintColor: Colors.blue0,
	headerTitleAlign: 'center',
	headerTransparent: false,
	headerBackImage: arrowGoBack,
};

const AppRoutes: React.FC = () => (
	<Navigator screenOptions={screenOptions}>
		<Screen name="Search" component={Search} />
		<Screen name="ShortProfile" component={ShortProfile} />
		<Screen name="FullProfile" component={FullProfile} />
	</Navigator>
);

export default AppRoutes;

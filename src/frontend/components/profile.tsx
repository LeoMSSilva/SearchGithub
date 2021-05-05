import React from 'react';
import Colors from '../styles/colors';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import {
	Address,
	FullName,
	Image,
	Row,
	ButtonImageProfile,
	User,
} from '../styles/styleProfile';

// @ts-ignore
export default function Profile({ navigation, route }) {
	const { avatar_url, name, login, location } = route.params.user;
	return (
		<>
			<ButtonImageProfile
				activeOpacity={0.6}
				onPress={() =>
					navigation.navigate('FullProfile', { user: route.params.user })
				}
			>
				<Image source={{ uri: avatar_url }} />
			</ButtonImageProfile>
			<Row>
				<Entypo name="user" color={Colors.blue5} style={{ fontSize: 20 }} />
				<FullName>{name}</FullName>
			</Row>
			<Row>
				<FontAwesome5
					name="github"
					color={Colors.blue5}
					style={{ fontSize: 20 }}
				/>
				<User>{login}</User>
			</Row>
			<Row>
				<Entypo name="home" color={Colors.blue5} style={{ fontSize: 20 }} />
				<Address>{location}</Address>
			</Row>
		</>
	);
}

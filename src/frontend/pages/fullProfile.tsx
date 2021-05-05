import React from 'react';
import { FlatList } from 'react-native';
import Colors from '../styles/colors';
import Repository from '../components/repository';
import {
	Entypo,
	FontAwesome5,
	Octicons,
	SimpleLineIcons,
} from '@expo/vector-icons';
import {
	Address,
	Container,
	FullName,
	Following,
	Id,
	Image,
	Repositories,
	Row,
	ViewImageProfile,
	User,
} from '../styles/styleProfile';

// @ts-ignore
export default function FullProfile({ route }) {
	const {
		avatar_url,
		name,
		login,
		location,
		id,
		followers,
		public_repos,
		repos_url,
	} = route.params.user;
	return (
		<Container>
			<ViewImageProfile>
				<Image source={{ uri: avatar_url }} />
			</ViewImageProfile>
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
			<Row>
				<FontAwesome5 name="id-card" color={Colors.blue5} />
				<Id>{id}</Id>
				<SimpleLineIcons name="user-following" color={Colors.blue5} />
				<Following>{followers} Seguidores</Following>
				<Octicons name="repo" color={Colors.blue5} />
				<Repositories>{public_repos} repositórios</Repositories>
			</Row>
			<FlatList
				style={{ width: '100%', marginTop: 10 }}
				data={repos_url}
				keyExtractor={(item) => String(item.updated_at)}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Repository
						name={item.name}
						language={item.language}
						description={item.description}
						created_at={item.created_at}
						updated_at={item.updated_at}
						user={login}
					/>
				)}
			/>
		</Container>
	);
}

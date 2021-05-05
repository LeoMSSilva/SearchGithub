import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../backend/services/api';
import { GetAllUser, SetUser } from '../../backend/database';
import Colors from '../styles/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import {
	ButtonSearch,
	Container,
	InputSearch,
	RowSearch,
	HeighSearch,
	RowRecents,
	ButtonRecents,
	TextRecents,
} from '../styles/styleSearch';

export default function Search() {
	const navigation = useNavigation();
	const [loadingSearch, setLoadingSearch] = useState(false);
	const [loadingRecents, setLoadingRecents] = useState(false);
	const [input, setInput] = useState('');

	useEffect(() => {
		setTimeout(() => Alert.alert('Seja bem vindo ao SearchGithub!'), 1000);
	}, []);

	const cleanUser = (user: any) => {
		const {
			avatar_url,
			name,
			login,
			location,
			id,
			followers,
			public_repos,
		} = user;
		return {
			avatar_url,
			name,
			login,
			location,
			id,
			followers,
			public_repos,
		};
	};

	const submit = async () => {
		if (input) {
			setLoadingSearch(true);

			try {
				const resRepo = await api.get(`users/${input}/repos`);
				const resUser = await api.get(`users/${input}`);

				const repos_url = resRepo.data;
				const userClean = cleanUser(resUser.data);
				const user = { ...userClean, repos_url };

				await SetUser(user);

				navigation.navigate('ShortProfile', { user: user });
				Keyboard.dismiss();

			} catch (e) {
				Alert.alert('Usuário não encontrado!');
			}
		} else alert('Usuário não pode estar vazio!');
		setLoadingSearch(false);
	};

	return (
		<Container>
			<RowSearch behavior="padding">
				<HeighSearch>
					<InputSearch
						value={input}
						placeholder="search a profile"
						placeholderTextColor={Colors.blue3}
						onChangeText={setInput}
						style={{
							...Platform.select({
								web: {
									outline: 'none',
								},
							}),
						}}
					/>

					<ButtonSearch
						disable={loadingSearch}
						activeOpacity={0.6}
						onPress={() => submit()}
					>
						{loadingSearch ? (
							<ActivityIndicator color={Colors.white} />
						) : (
							<FontAwesome5
								name="search"
								color={Colors.white}
								style={{ fontSize: 20 }}
							/>
						)}
					</ButtonSearch>
				</HeighSearch>
			</RowSearch>

			<ButtonRecents
				disable={loadingRecents}
				activeOpacity={0.6}
				onPress={() => {
					const users = async () => await GetAllUser();
					navigation.navigate('RecentProfiles', { users });
				}}
			>
				<RowRecents>
					<TextRecents>Consultados</TextRecents>
					<FontAwesome5
						name="search"
						color={Colors.white}
						style={{ fontSize: 20 }}
					/>
				</RowRecents>
			</ButtonRecents>
		</Container>
	);
}

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '@services/api';
import Colors from '@styles/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import {
	ButtonSearch,
	Container,
	InputSearch,
	RowSearch,
	HeighSearch,
	ColRecents,
	RowRecents,
	ButtonRecents,
	TextRecents,
	ListTitle,
} from './styles';

export default function Search() {
	const navigation = useNavigation();
	const [loadingSearch, setLoadingSearch] = useState(false);
	const [loadingRecents, setLoadingRecents] = useState(false);
	const [input, setInput] = useState('');
	const [listUser, setListUser] = useState<string[]>([]);
	const [surveyed, setSurveyed] = useState(false);

	useEffect(() => {
		setTimeout(() => Alert.alert('Seja bem vindo ao SearchGithub!'), 1000);
	}, []);

	const cleanUser = (user: any) => {
		const { avatar_url, name, login, location, id, followers, public_repos } =
			user;
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

	const submit = async (user: string) => {
		try {
			const resRepo = await api.get(`users/${user}/repos`);
			const resUser = await api.get(`users/${user}`);

			const repos_url = resRepo.data;
			const userClean = cleanUser(resUser.data);
			const userSearch = { ...userClean, repos_url };

			navigation.navigate('ShortProfile', { user: userSearch });
			Keyboard.dismiss();
		} catch (e) {
			Alert.alert('Usuário não encontrado!');
		}
	};

	return (
		<Container>
			<RowSearch behavior="padding">
				<HeighSearch>
					<InputSearch
						value={input}
						placeholder="Digite o nome do usuario..."
						placeholderTextColor={Colors.blue3}
						onChangeText={setInput}
					/>

					<ButtonSearch
						disabled={loadingSearch}
						activeOpacity={0.6}
						onPress={() => {
							if (input) {
								setSurveyed(true);
								setLoadingSearch(true);
								submit(input);
								if (listUser.indexOf(input) === -1) listUser.push(input);
								setLoadingSearch(false);
								setInput('');
							} else alert('Usuário não pode estar vazio!');
						}}
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

			<ColRecents>
				<RowRecents>
					{surveyed ? (
						<ListTitle>
							<TextRecents style={{ color: Colors.blue5 }}>
								Visitados
							</TextRecents>
							<FontAwesome5
								name="search"
								color={Colors.blue5}
								style={{ fontSize: 20 }}
							/>
						</ListTitle>
					) : (
						<></>
					)}
				</RowRecents>
				<RowRecents>
					<FlatList
						style={{ width: '100%', marginTop: 10 }}
						data={listUser}
						keyExtractor={(item) => String(item)}
						horizontal={true}
						showsHorizontalScrollIndicator={true}
						renderItem={({ item }) => (
							<ButtonRecents
								disabled={loadingRecents}
								activeOpacity={0.6}
								onPress={() => submit(item)}
							>
								<TextRecents>{item}</TextRecents>
							</ButtonRecents>
						)}
					/>
				</RowRecents>
			</ColRecents>
		</Container>
	);
}

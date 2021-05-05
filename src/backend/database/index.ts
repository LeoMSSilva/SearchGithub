import AsyncStorage from '@react-native-async-storage/async-storage';

export const SetUser = async (value: {
	repos_url: object;
	avatar_url: string;
	name: string;
	login: string;
	location: string;
	id: string;
	followers: string;
	public_repos: string;
}) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(value.id, jsonValue);
	} catch (e) {
		console.log(e, 'SetUser');
	}
};

export const GetAllUser = async () => {
	let keys: string[] = [];
	try {
		keys = await AsyncStorage.getAllKeys();
	} catch (e) {
		console.log(e, 'GetAllUser');
	}
	return keys;
};

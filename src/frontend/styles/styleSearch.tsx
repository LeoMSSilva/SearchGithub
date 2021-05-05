// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	background-color: #e6f0ff;
`;

export const RowSearch = styled.KeyboardAvoidingView`
	justify-content: center;
	width: 95%;
	height: 60px;
`;

export const HeighSearch = styled.View`
	flex-direction: row;
	justify-content: center;
	width: 100%;
`;

export const InputSearch = styled.TextInput`
	width: 85%;
	padding: 5px 10px;
	background-color: #cadfff;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	color: #076aff;
`;

export const ButtonSearch = styled.TouchableOpacity`
	height: 100%;
	width: 15%;
	padding: 5px;
	background-color: #076aff;
	align-items: center;
	justify-content: center;
`;

export const RowRecents = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
`;

export const ButtonRecents = styled.TouchableOpacity`
	width: 200px;
	padding: 5px 20px;
	background-color: #076aff;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
`;

export const TextRecents = styled.Text`
	color: #ffffff;
	font-weight: bold;
	margin-right: 10px;
	font-size: 20px;
`;

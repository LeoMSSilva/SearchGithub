import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	background-color: #e6f0ff;
`;

export const RowProfile = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	background-color: #cadfff;
	padding: 0px 0px 20px;
`;

export const ColProfile = styled.View`
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ViewImageProfile = styled.View`
	width: 200px;
	height: 200px;
	align-items: center;
	justify-content: center;
	margin-top: 10%;
`;

export const ButtonImageProfile = styled.TouchableOpacity`
	width: 150px;
	height: 150px;
	align-items: center;
	justify-content: center;
	margin-top: 10%;
`;

export const Image = styled.ImageBackground`
	width: 100%;
	height: 100%;
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	width: 100%;
`;

export const FullName = styled.Text`
	font-size: 20px;
	margin-left: 5px;
	color: #4e95ff;
`;

export const User = styled.Text`
	font-size: 18px;
	margin-left: 5px;
	color: #4e95ff;
`;

export const Address = styled.Text`
	font-size: 16px;
	margin-left: 5px;
	color: #4e95ff;
`;

export const Id = styled.Text`
	font-size: 14px;
	margin-right: 10px;
	margin-left: 5px;
	color: #4e95ff;
`;

export const Following = styled.Text`
	font-size: 14px;
	margin-right: 10px;
	margin-left: 5px;
	color: #4e95ff;
`;

export const Repositories = styled.Text`
	font-size: 14px;
	margin-right: 10px;
	margin-left: 5px;
	color: #4e95ff;
`;

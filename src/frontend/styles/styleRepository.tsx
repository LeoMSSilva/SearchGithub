// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex-direction: column;
	align-items: flex-start;
	background-color: #cadfff;
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: baseline;
	justify-content: space-between;
	width: 100%;
	margin: 2px 0px;
	padding: 0px 20px;
`;

export const Line = styled.View`
	border-top-width: 1px;
	border-top-color: #4e95ff;
	width: 100%;
	padding-top: 5px;
`;

export const Title = styled.Text`
	margin-top: 5px;
	color: #4e95ff;
	width: 100%;
	font-size: 20px;
`;

export const Description = styled.Text.attrs({ numberOfLines: 2 })`
	color: #4e95ff;
	width: 100%;
	font-size: 16px;
`;

export const Language = styled.Text`
	color: #4e95ff;
	margin-bottom: 10px;
	font-size: 14px;
`;

export const Created = styled.Text`
	font-size: 10px;
	margin-bottom: 10px;
	color: #4e95ff;
`;

export const Uploaded = styled.Text`
	color: #4e95ff;
	margin-bottom: 10px;
	font-size: 10px;
`;

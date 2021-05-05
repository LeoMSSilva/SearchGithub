import React from 'react';
import { Container, RowProfile, ColProfile } from '../styles/styleProfile';
import Profile from '../components/profile';

// @ts-ignore
export default function ShortProfile({ route, navigation }) {
	return (
		<Container>
			<RowProfile>
				<ColProfile>
					<Profile navigation={navigation} route={route}/>
				</ColProfile>
			</RowProfile>
		</Container>
	);
}

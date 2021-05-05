import React, { useEffect, useState } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import {
	Container,
	Row,
	Line,
	Title,
	Description,
	Language,
	Created,
	Uploaded,
} from '../styles/styleRepository';

interface IRepository {
	name: string;
	language: string;
	description: string;
	created_at: string;
	updated_at: string;
	user: string;
}

export default function Repository({
	name,
	language,
	description,
	created_at,
	updated_at,
	user,
}: IRepository) {
	Moment.locale('pt-br');
	const [useDescription, setUseDescription] = useState(true);
	const [useLanguage, setUseLanguage] = useState(true);
	useEffect(() => {
		description ? setUseDescription(true) : setUseDescription(false);
		language ? setUseLanguage(true) : setUseLanguage(false);
	});
	return (
		<Container>
			<TouchableOpacity
				style={{ width: '100%' }}
				onPress={() => Linking.openURL(`https://github.com/${user}/${name}`)}
			>
				<Line>
					<Row>
						<Title>{name}</Title>
					</Row>
				</Line>
				<Row>
					<Description>{useDescription ? description : '-'}</Description>
				</Row>
				<Row>
					<Language>{useLanguage ? language : '-'}</Language>
					<Created>
						Criado em: {Moment(created_at).format('DD-MM-yyyy')}
					</Created>
					<Uploaded>
						Atualizado em:{Moment(updated_at).format('DD-MM-yyyy')}
					</Uploaded>
				</Row>
			</TouchableOpacity>
		</Container>
	);
}

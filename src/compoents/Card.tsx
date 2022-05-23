import React from 'react';
import { Entry } from 'contentful';
import { ICodeToolFields, ICodeTool } from '../../contentful-types';

import './components.css';

interface ICardProps {
	card: Entry<ICodeToolFields>;
}
export const Card: React.FC<ICardProps> = ({ card }) => {
	const data = card.fields;
	return (
		<div className='card-wrapper'>
			<h3>{data.name}</h3>
			<img src={data.image.fields.file.url} alt='tool code logo' />
			<p>{data.description}</p>
		</div>
	);
};

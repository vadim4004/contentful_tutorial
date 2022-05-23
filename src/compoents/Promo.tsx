import React from 'react';
import { IPromoFields } from '../../contentful-types';

import './components.css';

interface IPromoProps {
	data: IPromoFields;
}

export const Promo: React.FC<IPromoProps> = ({ data }) => {
	return (
		<div className='promo-wrapper'>
			<img
				src={data.promoImage.fields.file.url}
				alt={data.promoImage.fields.title}
			/>
			{data.promoText}
		</div>
	);
};

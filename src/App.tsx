import React, { useEffect, useState } from 'react';
import { Entry } from 'contentful';
import { useContentful } from './contentful';

import { ICodeToolFields, IPromoFields } from '../contentful-types';
import { Card } from './compoents/Card';

import './App.css';
import { Promo } from './compoents/Promo';

const App: React.FC = () => {
	const [toolCards, setToolCards] = useState<Entry<ICodeToolFields>[]>([]);
	const [promoData, setPromoData] = useState<Entry<IPromoFields>[]>([]);
	const { getCodeTools, getPromo } = useContentful();

	useEffect(() => {
		getPromo().then((items) => items && setPromoData(items));
	}, []);

	useEffect(() => {
		getCodeTools().then((items) => items && setToolCards(items));
	}, []);

	return (
		<div className='App'>
			<div className='title'>
				<h1>Contentful cards example</h1>
			</div>
			{!!promoData.length && <Promo data={promoData[0].fields} />}
			<div className='cards'>
				{toolCards.map((card, i) => (
					<Card key={i} card={card} />
				))}
			</div>
		</div>
	);
};

export default App;

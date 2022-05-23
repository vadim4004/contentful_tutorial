import { createClient } from 'contentful';
import { ICodeToolFields, IPromoFields } from '../../contentful-types';

export const useContentful = () => {
	const client = createClient({
		accessToken: '6JwlBYujGwwgJR5HfNixFmaPUPaL9-ItqMRzkMHjfFk',
		space: '35vgya6ccc7o',
	});

	const getCodeTools = async () => {
		try {
			const data = await client.getEntries<ICodeToolFields>({
				content_type: 'codeTool',
				select: 'fields',
			});

			return data.items;
		} catch (e) {
			console.log(`Error fetching data: ${e}`);
		}
	};

	const getPromo = async () => {
		try {
			const data = await client.getEntries<IPromoFields>({
				content_type: 'promo',
				select: 'fields',
			});

			return data.items;
		} catch (e) {
			console.log(`Error fetching data: ${e}`);
		}
	};
	return { getCodeTools, getPromo };
};

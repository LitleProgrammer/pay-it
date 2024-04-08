import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
        const userName = data.get('username');
        console.log(userName)
	},
} satisfies Actions;
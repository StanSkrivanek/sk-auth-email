import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
	console.log('Ran layout load');
	return {
		session: await getServerSession(event)
	};
};

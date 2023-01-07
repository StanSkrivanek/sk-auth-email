import '$lib/db';

import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// stage 1: get session
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.sb = supabaseClient;
	event.locals.session = session;

	// stage 2: check if route is protected
	if (event?.route?.id !== null && event.route.id.startsWith('/(dashboard)')) {
		// console.log('HOOKS: EVENT ROUTE ID: ', event.route.id);
		// console.log('protected route');
		if (!session) throw redirect(303, '/');
	}
	// Stage 3: return the response
	return resolve(event);
};

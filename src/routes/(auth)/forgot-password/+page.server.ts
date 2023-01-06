import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	forgotEmail: async ({ request, locals}) => {
		const data = await request.formData();
		const email = data.get('email');
		const { err } = await locals.sb.auth.resetPasswordForEmail(email , {
			redirectTo: 'http://localhost:5173/reset-password'
		}
		);

		// TODO handle error if user email doesn't exist in db

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			return fail(500, {
				message: 'Server error. Try again later.'
			});
		}

		// throw redirect(303, '/');
	}
};

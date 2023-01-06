import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	updateUser: async ({ request, locals }) => {
		const data = await request.formData();
		const password = data.get('password') as string;
		const confirm = data.get('confirm-password') as string;
		if (password !== confirm) {
			return fail(400, {
				error: 'Passwords do not match'
			});
		} else if (password.length < 8) {
			return fail(400, {
				error: 'Password must be at least 8 characters'
			});
		} else {
			console.log('your password was successfully updated');
		}

		const { err } = await locals.sb.auth.updateUser(
			{ password: password },
			{
				redirectTo: 'http://localhost:5173/login'
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

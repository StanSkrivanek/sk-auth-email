import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
// import { registerUserSchema } from '$lib/schemas';
// import { generateUsername, validateData } from '$lib/utils';

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		console.log(body);
		const { data, error: err } = await locals.sb.auth.signUp({
			email: body.email as string,
			password: body.password as string
		});
		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid email or password'
				});
			}
			return fail(500, {
				error: 'Server error. Please try again later.'
			});
		}

		throw redirect(303, '/');
	}
};

// export const actions = {
// 	register: async ({ request, locals }) => {
// 		// const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

// 		// if (errors) {
// 		// 	return invalid(400, {
// 		// 		data: formData,
// 		// 		errors: errors.fieldErrors
// 		// 	});
// 		// }

// 		// let username = generateUsername(formData.name.split(' ').join('')).toLowerCase();

// 		// try {
// 		// 	await locals.pb.collection('users').create({ username, ...formData });
// 		// 	await locals.pb.collection('users').requestVerification(formData.email);
// 		// } catch (err) {
// 		// 	console.log('Error: ', err);
// 		// 	throw error(500, 'Something went wrong');
// 		// }

// 		throw redirect(303, '/login');
// 	}
// };

<script lang="ts">
	import { enhance } from '$app/forms';
	import  Input  from '$components/Input.svelte';
	import { supabaseClient } from '$lib/db';
	import type { ActionData } from './$types';

	// import toast from 'svelte-french-toast';

	export let form: ActionData;
	let loading = false;

	// const submitLogin = async () => {
	// 	loading = true;
	// 	const { data, error } = await supabaseClient.auth.api.updateUser(
	// 		{ password: form.data.password },
	// 		{ redirectTo: 'https://localhost:5173/login' }
	// 	);
	// 	if (error) {
	// 		console.log('There was an error', error.message);
	// 	} else {
	// 		console.log('please check your email', data);
	// 	}
	// 	loading = false;
	// };
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Set a new password
	</h2>
	<form
		action="?/updateUser"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
	>
	
		<Input
			type="password"
			id="password"
			label="Password"
			errors={form?.error}
			disabled={loading}
		/>
		<Input
			type="password"
			id="confirm-password"
			label="Confirm Password"
			errors={form?.error}
			disabled={loading}
		/>

		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full" disabled={loading}>Reset Password</button>
		</div>
		<!-- {#if form?.notVerified}
			<div class="alert alert-error shadow-lg w-full max-w-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>You must verify your email before you can login.</span>
				</div>
			</div>
		{/if} -->
	</form>
</div>
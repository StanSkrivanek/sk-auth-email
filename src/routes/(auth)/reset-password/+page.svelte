<script lang="ts">
	import  Input  from '$components/Input.svelte';
	import type { ActionData } from './$types';
	
	// import { supabaseClient } from '$lib/db';
	// import { enhance } from '$app/forms';
	// import toast from 'svelte-french-toast';

	export let form: ActionData;
	let loading = false;

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
	</form>
</div>
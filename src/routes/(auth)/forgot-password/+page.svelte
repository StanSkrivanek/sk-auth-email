<script lang="ts">
	import { enhance } from '$app/forms';
	import Input from '$components/Input.svelte';
	// import toast from 'svelte-french-toast';
	import type { PageData, ActionData } from './$types';

	let value = '' as string;
	let loading = false;

	export let form: ActionData;
    
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Forgot Password
	</h2>
	<p>You will receive a link to create a new password via email</p>
	<form
		action="?/forgotEmail"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
	>
		<Input
			type="email"
			id="email"
			label="Email"
			{value}
			errors={form?.error}
			disabled={loading}
			placeholder="email address you use to register your account"
		/>

		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full" disabled={loading}
				>Get a new password</button
			>
		</div>
		{#if form?.notVerified}
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
		{/if}
	</form>
    <!-- <pre>
        {JSON.stringify( form, null, 2)}
    </pre> -->
</div>

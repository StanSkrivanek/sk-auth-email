<script lang="ts">
	import { page } from '$app/stores';
	// import type { PageData } from './$types';
	// import { supabaseClient } from '$lib/db';
	// import Account from './Account.svelte';
	// import Auth from './Auth.svelte';

	// export let data: PageData;
	// console.log(data);
</script>

<svelte:head>
	<title>Supabase + SvelteKit</title>
	<meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
{#if !$page.data.session}
	<h2>I'm NOT logged in</h2>
	<!-- <Auth /> -->
{:else}
	<!-- <Account session={$page.data.session} /> -->
	<h1>Welcome {$page.data.session.user.email}</h1>
	<p>I am logged in!</p>
{/if}

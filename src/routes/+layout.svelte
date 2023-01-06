<script lang="ts">
	import '../app.postcss';
	import { supabaseClient } from '$lib/db';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import MainNavbar from '$components/MainNavbar.svelte';
	import type { PageData } from './$types';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
	export let data: PageData;

</script>
<MainNavbar {data}/>
<slot />

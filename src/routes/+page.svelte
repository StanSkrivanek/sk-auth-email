<script>
	import { page } from '$app/stores';
	//  import { supabase } from '$lib/supabaseClient'
	// import Account from './Account.svelte';
	// import Auth from './Auth.svelte';
</script>

<svelte:head>
	<title>Supabase + SvelteKit</title>
	<meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<h1>Welcome to SvelteKit</h1>
{#if !$page.data.session}
	<h2>I'm NOT logged in</h2>
	<!-- <Auth /> -->
{:else}
	<!-- <Account session={$page.data.session} /> -->
	<h1>Welcome {$page.data.session.user.email}</h1>
	<p>I am logged in!</p>
{/if}

// See https://kit.svelte.dev/docs#configuration-app
import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';
import type { Session } from '@supabase/supabase-js';
// See https://kit.svelte.dev/docs/types#app

declare global {
	declare namespace App {
		interface Supabase {
			Database: import('./DatabaseDefinitions').Database;
			SchemaName: 'public';
		}

		interface Locals {
			sb: TypedSupabaseClient;
			session: Session | null;
		}
		interface PageData {
			session: import('@supabase-js').Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
	declare namespace NodeJS {
		interface Global {
			// rome-ignore lint/suspicious/noExplicitAny: <explanation>
			spotConfig: any;
		}
	}
}

<script lang='ts'>
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { onMount } from 'svelte';
import * as Cookies from 'js-cookie';

onMount(() => {
	const auth = getAuth();
	onIdTokenChanged(auth, async (user) => {
		if (user !== null) {
			Cookies.set('token', await user.getIdToken(), { path: '/' });
		} else {
			Cookies.remove('token');
		}
	});
});
</script>
<script lang='ts' context='module'>/**
 * @type {import('@sveltejs/kit').Load}
 */

import firebaseCredentials from '../lib/firebase.credentials';
import { initialiseClient } from '../lib/firebase.client';

export async function load() {
	initialiseClient(firebaseCredentials);
	return {};
}
</script>

<nav>
	<a href='/'>Login</a>
	<a href='/protected'>Protected</a>
</nav>
<slot />

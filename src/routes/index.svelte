<form on:submit|preventDefault={login}>
	<h1>Login</h1>
	<input bind:value={email} type='email' required placeholder='email'>
	<input bind:value={password} type='password' required placeholder='password'>
	<button disabled={loading} type='submit'>
		{#if loading}
			Connecting...
		{:else }
			Login
		{/if}
	</button>
</form>
<button on:click={logout}>Logout</button>
<svelte:head>
	<title>Login</title>
</svelte:head>

<script lang='ts'>
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

let email = '';
let password = '';
let loading = false;

async function login() {
	try {
		loading = true;
		const auth = getAuth();
		const { user } = await signInWithEmailAndPassword(auth, email, password);
		console.log('☑️ Logged in !', { user });
	} catch (e) {
		console.error({ loginError: e });
	} finally {
		loading = false;
	}
}

async function logout() {
	try {
		const auth = getAuth();
		await signOut(auth);
	} catch (e) {
		console.error({ logoutError: e });
	}
}
</script>

<script lang="ts" context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		if (session.isLoggedIn) {
			return {};
		} else {
			return {
				redirect: '/',
				status: 302
			};
		}
	}
</script>

<svelte:head>
	<title>Protected</title>
</svelte:head>
<h1>Secret bitcoin stash 🪙</h1>
<img
	src="https://media.tenor.com/images/14ee5065c00105e2ba20470f4f0a8f05/tenor.gif"
	alt="bitcoin"
/>

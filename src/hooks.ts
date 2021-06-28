/** @type {import('@sveltejs/kit').GetSession} */
import type { ServerRequest } from '@sveltejs/kit/types/hooks';
import admin from 'firebase-admin';
import cookie from 'cookie';
import { initialiseAdmin } from '$lib/firebase.admin';


export function getSession({ locals }: ServerRequest) {
	return {
		user: {
			email: locals.user?.email
		},
		isLoggedIn: locals.user !== null
	};
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {
	initialiseAdmin();
	const { token } = cookie.parse(request.headers.cookie || '');
	if (token) {
		request.locals.user = await admin.auth().verifyIdToken(token);
	} else {
		request.locals.user = null;
	}
	return await resolve(request);
}

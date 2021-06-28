import type { FirebaseOptions } from '@firebase/app';
import { initializeApp } from 'firebase/app';
import * as admin from 'firebase-admin';

let isAdminInitialised = false;
let isClientInitialised = false;

export function initialiseAdmin() {
	try {
		if (!isAdminInitialised) {
			isAdminInitialised = true;
			console.log(process.env['PRIVATE_KEY']);
			admin.initializeApp({
				credential: admin.credential.cert({
					privateKey: process.env['PRIVATE_KEY'],
					clientEmail: process.env['CLIENT_EMAIL'],
					projectId: process.env['PROJECT_ID']
				}),
				databaseURL: `https://${ process.env['PROJECT_ID'] }.firebaseio.com`
			});
		}
	} catch (e) {
		console.error('Firebase Admin initialisation error', { e });
	}

}

export function initialiseClient(config: FirebaseOptions) {
	try {
		if (!isClientInitialised) {
			initializeApp(config);
			isClientInitialised = true;
		}
	} catch (e) {
		console.error('Firebase Client initialisation error', { e });
	}

}

import type { FirebaseOptions } from '@firebase/app';
import { initializeApp } from 'firebase/app';

let isClientInitialised = false;

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

import admin from 'firebase-admin';

let isAdminInitialised = false;

export function initialiseAdmin() {
	try {
		if (!isAdminInitialised) {
			isAdminInitialised = true;
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

# 🔥 A demo of SvelteKit using Firebase and TypeScript

## Features
* 🛠 Access firebase on the client
* 🔒 Authorize the user on endpoints and on routes during SSR

## Installation
* Install the dependencies with `npm install` (or `pnpm install` or `yarn`)
* Set your firebase web SDK credentials in `src/lib/firebase.credentials.ts`
* Authorize the firebase admin SDK by setting the environment variables :
    * PRIVATE_KEY
    * CLIENT_EMAIL
    * PROJECT_ID
    
    These variables can be found in your private key file json for your service account (see https://firebase.google.com/docs/admin/setup#initialize-sdk)

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

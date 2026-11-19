'use client';

import { getApp, getApps, initializeApp } from '@firebase/app';
import {
  browserPopupRedirectResolver,
  getAuth,
  initializeAuth,
  inMemoryPersistence,
} from '@firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const requiredConfig = [
  firebaseConfig.apiKey,
  firebaseConfig.authDomain,
  firebaseConfig.projectId,
  firebaseConfig.appId,
];

export const isFirebaseConfigured = requiredConfig.every(Boolean);

export const firebaseAuth = isFirebaseConfigured
  ? getAuth(
      getApps().length > 0
        ? getApp()
        : initializeApp(firebaseConfig)
    )
  : null;

const deletionAppName = 'account-deletion';
const existingDeletionApp = getApps().find((app) => app.name === deletionAppName);

export const accountDeletionAuth = isFirebaseConfigured && typeof window !== 'undefined'
  ? existingDeletionApp
    ? getAuth(existingDeletionApp)
    : initializeAuth(initializeApp(firebaseConfig, deletionAppName), {
        persistence: inMemoryPersistence,
        popupRedirectResolver: browserPopupRedirectResolver,
      })
  : null;

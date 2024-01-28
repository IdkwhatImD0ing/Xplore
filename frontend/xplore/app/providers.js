// app/providers.tsx
'use client'

import{ChakraProvider} from "@chakra-ui/react";
import {doc, getFirestore} from 'firebase/firestore';
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp
} from 'reactfire';

const firebaseConfig = {
  apiKey : process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket : process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId : process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId : process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export function App({children}) {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (<FirestoreProvider sdk = {firestoreInstance}><ChakraProvider>{
      children}</ChakraProvider>
            </FirestoreProvider>);
}
export function Providers({children}) {

  return <FirebaseAppProvider firebaseConfig = {firebaseConfig}>
      <App children =
       { children } />
          </FirebaseAppProvider>
}
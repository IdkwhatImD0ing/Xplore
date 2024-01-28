// app/providers.tsx
'use client'

import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {FirebaseAppProvider, FirestoreProvider, useFirebaseApp} from 'reactfire'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export default function Providers({children}) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Firestore>
        <ChakraProvider>{children}</ChakraProvider>
      </Firestore>
    </FirebaseAppProvider>
  )
}

function Firestore({children}) {
  const firebaseApp = useFirebaseApp() // Get the initialized Firebase app
  const firestoreInstance = getFirestore(firebaseApp) // Get or initialize the Firestore instance
  return (
    <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>
  )
}

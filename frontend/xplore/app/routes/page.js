'use client'
import React, {useEffect, useState} from 'react'
import {useFirestore, useFirestoreDocData} from 'reactfire'
import {useUser} from '@clerk/nextjs'
import {Box, List, ListItem, ListIcon, Heading, Link} from '@chakra-ui/react'
import {CheckCircleIcon} from '@chakra-ui/icons'
import NextLink from 'next/link' // If you're using Next.js

import {doc, getDoc} from 'firebase/firestore'

export default function Routes() {
  const {user} = useUser()
  const firestore = useFirestore()
  const [fieldKeys, setFieldKeys] = useState([])

  useEffect(() => {
    const fetchUserDoc = async () => {
      if (user) {
        const userDocRef = doc(firestore, 'users', user.id)
        const docSnapshot = await getDoc(userDocRef)
        if (docSnapshot.exists()) {
          const data = docSnapshot.data()
          setFieldKeys(Object.keys(data))
        } else {
          console.log('No such document!')
        }
      }
    }

    fetchUserDoc().catch(console.error)
  }, [user, firestore])

  return (
    <Box p={5} paddingTop="50px">
      <Heading mb={4}>Your Routes</Heading>
      {fieldKeys.length > 0 ? (
        <List spacing={3}>
          {fieldKeys.map((key, index) => (
            <ListItem
              key={index}
              padding="5px"
              borderRadius="md"
              _hover={{bg: 'gray.100', cursor: 'pointer'}}
            >
              <NextLink href={`/wizard?route=${key}`} passHref>
                <Link display="flex" alignItems="center">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {key}
                </Link>
              </NextLink>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No routes to display.</p>
      )}
    </Box>
  )
}

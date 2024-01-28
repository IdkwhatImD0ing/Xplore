'use client'
import MapComponent from './MapComponent'
import {Box, Button, Text, Flex} from '@chakra-ui/react'
import {
  Input,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import RouteSelector from './RouteSelector'
import DayAccordion from './DayAccordion'
import {useUser} from '@clerk/nextjs'
import {useFirestore} from 'reactfire'
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore'
import {useRouter} from 'next/navigation'

const MapPage = ({routePlans}) => {
  const router = useRouter() // Create an instance of the router
  const {user} = useUser() // Get the current user
  const firestore = useFirestore() // Access Firestore

  const [currentRouteIndex, setCurrentRouteIndex] = useState(0)
  const [expandedDayIndex, setExpandedDayIndex] = useState(0) // State to keep track of the expanded day

  const currentRoute = routePlans[currentRouteIndex]
  const currentDay = currentRoute[expandedDayIndex] // currentDay is an array of points of interest
  // [{name: 'attraction', lat: 0, lon: 0}, ...]

  const [routeName, setRouteName] = useState('') // State to keep the route name
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false) // State to control the dialog visibility
  const onClose = () => setIsSaveDialogOpen(false) // Function to close the dialog
  const toast = useToast()

  const nextRoute = () => {
    setCurrentRouteIndex((prevIndex) => (prevIndex + 1) % routePlans.length)
  }

  const prevRoute = () => {
    setCurrentRouteIndex((prevIndex) =>
      prevIndex === 0 ? routePlans.length - 1 : prevIndex - 1,
    )
  }

  const handleSaveRoute = async () => {
    try {
      const userDocRef = doc(firestore, 'users', user.id) // Reference to the user's document

      // Get the document
      const docSnapshot = await getDoc(userDocRef)

      if (docSnapshot.exists()) {
        // Document exists, check if route name already exists
        const data = docSnapshot.data()
        if (data[routeName]) {
          // Route name exists
          toast({
            title: 'Route name exists.',
            description: 'Please use a different name.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        } else {
          // Update the document with the new route
          await updateDoc(userDocRef, {
            [routeName]: JSON.stringify(routePlans[currentRouteIndex]),
          })
          toast({
            title: 'Route updated.',
            description: 'Your route has been successfully updated.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          onClose() // Close the dialog
        }
      } else {
        // Document does not exist, create it with the new route
        console.log('Creating new document with route:', routeName)
        await setDoc(userDocRef, {
          [routeName]: JSON.stringify(routePlans[currentRouteIndex]),
        })
        toast({
          title: 'Route saved.',
          description: 'Your route has been successfully saved.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        onClose() // Close the dialog
      }
      setRouteName('') // Reset the route name
      router.push('/routes') // Redirect to routes
    } catch (error) {
      console.error('Error saving route:', error)
      toast({
        title: 'Error saving route.',
        description: 'An error occurred while saving the route.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex w="100%" h="100vh">
      <Box flex="1" maxWidth="300px">
        <RouteSelector
          currentRouteIndex={currentRouteIndex}
          totalRoutes={routePlans.length}
          nextRoute={nextRoute}
          prevRoute={prevRoute}
        />
        <DayAccordion
          route={currentRoute}
          expandedDayIndex={expandedDayIndex}
          setExpandedDayIndex={setExpandedDayIndex}
        />
      </Box>
      <Box flex="2" p={5}>
        {currentRoute && <MapComponent currentDay={currentDay} />}{' '}
        <Button
          colorScheme="green"
          position="absolute"
          left="16px"
          bottom="16px"
          onClick={() => setIsSaveDialogOpen(true)} // Open the dialog to input route name
        >
          Use this route
        </Button>
      </Box>
      <AlertDialog isOpen={isSaveDialogOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Save Route
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Input
                placeholder="Route Name"
                value={routeName}
                onChange={(e) => setRouteName(e.target.value)}
              />
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={handleSaveRoute} ml={3}>
                Save
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  )
}

export default MapPage

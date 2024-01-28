import {
  Center,
  FormControl,
  FormLabel,
  Input,
  useBreakpointValue,
} from '@chakra-ui/react'

const AttractionTypeInput = ({preferences, setPreferences}) => {
  // Responsive width using the useBreakpointValue hook
  const inputWidth = useBreakpointValue({
    base: '90%',
    sm: '80%',
    md: '60%',
    lg: '50%',
    xl: '40%',
  })

  return (
    <FormControl>
      <FormLabel paddingTop="1rem" marginBottom="0" textAlign="center">
        Prompt
      </FormLabel>
      <Center>
        <Input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="'Nature', or 'Museum'"
          width={inputWidth}
        />
      </Center>
    </FormControl>
  )
}

export {AttractionTypeInput}

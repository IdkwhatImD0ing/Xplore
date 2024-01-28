import {useState} from 'react'
import {
  Heading,
  Button,
  Center,
  Flex,
  FormControl,
  InputGroup,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  VStack,
  Box,
  Select, // Import Select from Chakra UI
} from '@chakra-ui/react'

const CityInput = ({setCities}) => {
  const [cityName, setCityName] = useState('')
  const [stateName, setStateName] = useState('') // State for the selected state
  const [numDays, setNumDays] = useState(1)

  const handleAddCity = (e) => {
    e.preventDefault() // Prevent the default form submit action
    setCities((prevCities) => [
      ...prevCities,
      {name: cityName + ', ' + stateName, days: parseInt(numDays)}, // Include state in the object
    ])
    // Reset the input fields after adding the city
    setCityName('')
    setNumDays(1)
  }

  return (
    <Box maxWidth="500px" width="100%" margin="auto">
      <Center>
        <Heading as="h2" paddingTop="1rem">
          Input Cities
        </Heading>
      </Center>
      <form onSubmit={handleAddCity}>
        <FormControl isRequired>
          <VStack align="stretch" mt={4}>
            <Flex align="center">
              <InputGroup size="md" flex="1">
                <Input
                  type="text"
                  placeholder="Enter City"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                />
              </InputGroup>

              <Select
                ml={4}
                maxWidth="90px"
                placeholder="State"
                onChange={(e) => setStateName(e.target.value)}
                value={stateName}
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </Select>

              <NumberInput
                max={50}
                min={1}
                ml={4}
                width="100px"
                maxWidth="160px"
                value={numDays}
                onChange={(valueAsString, valueAsNumber) =>
                  setNumDays(valueAsString)
                }
              >
                <NumberInputField placeholder="# Days" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel ml={2} mb={0}>
                Days
              </FormLabel>
            </Flex>
            <Center pt={4}>
              <Button colorScheme="teal" type="submit" width="100%">
                Add Stop
              </Button>
            </Center>
          </VStack>
        </FormControl>
      </form>
    </Box>
  )
}

export {CityInput}

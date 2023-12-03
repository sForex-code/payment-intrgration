import { HStack, Stack, flexbox } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Paymet = () => {

  const querry=useSearchParams()[0]

  const ref =querry.get("ref")
  return (
    <Stack direction={'row'} justifyContent={"center"} alignItems={"center"}>
       <HStack>order succesfull
        <h2>{ref}</h2>
        
        </HStack> 

    </Stack>
  )
}

export default Paymet
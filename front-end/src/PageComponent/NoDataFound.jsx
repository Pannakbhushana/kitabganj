import React from 'react'
import { Box,Text } from '@chakra-ui/react'


export default function NoDataFound() {

  return (
    <Box position={'relative'} 
         minHeight={'200px'} 
         width={'100%'} 
         overflow={'hidden'} 
         display={'flex'}
         alignItems={'center'}
         justifyContent={'center'}
         >
        <Text fontSize={'30px'} as={'b'} color={'gray.500'}>No Data Found !</Text>
    </Box>
  )
}
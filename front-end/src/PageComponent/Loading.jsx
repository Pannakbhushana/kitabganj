import React from 'react'
import { Box,Text } from '@chakra-ui/react'

export default function Loading() {

  return (
    <Box position={'relative'} 
         minHeight={'600px'} 
         width={'100%'} 
         overflow={'hidden'} 
         display={'flex'}
         alignItems={'center'}
         justifyContent={'center'}
         paddingTop={'80px'}
         >
        <Text fontSize={'35px'} as={'b'} >Loading...</Text>
    </Box>
  )
}
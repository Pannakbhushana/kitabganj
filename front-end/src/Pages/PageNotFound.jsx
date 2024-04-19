import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function PageNotFound() {
  return (
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
      <Text fontSize='2xl' as={'b'} >Page not found !</Text>
  </Box>
  )
}

export default PageNotFound

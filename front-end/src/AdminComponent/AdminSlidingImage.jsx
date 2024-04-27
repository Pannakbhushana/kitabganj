import React, { useEffect, useState } from 'react'
import { Box,Button,Text } from '@chakra-ui/react'

function AdminSlidinImage() {
  

  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
        <Box border={'1px solid black'} minH='200px' w={'80%'} ml='10%'>
            <Text >Sliding Image</Text>
            <Box>titleColor</Box>
            <Box>textColor</Box>
            <Box>title</Box>
            <Box>text</Box>
            <Box>image</Box>
        </Box>
    </Box>
  )
}

export default AdminSlidinImage
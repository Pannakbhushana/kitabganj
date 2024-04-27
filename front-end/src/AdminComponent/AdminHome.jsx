import React, { useEffect, useState } from 'react'
import { Box,Button,Text,Input,Grid,Textarea,FormControl,FormLabel} from '@chakra-ui/react'

function AdminHome() {
  

  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
        <Text >Home</Text>
            <FormControl border={'0px solid black'} minH='200px' w={'60%'} ml='10%' boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'}>

                    <FormLabel>Tab Description</FormLabel>
                    <Input type='text'  placeholder='Tab Description' />
                    <br />

                    <FormLabel>Title</FormLabel>
                    <Input type='text'  placeholder='Title' />
                    <br />

                    <FormLabel>Image url</FormLabel>
                    <Input type='text'  placeholder='Image url' />
                    <br />

                    <FormLabel>purchase link</FormLabel>
                    <Input type='text'  placeholder='purchase link' />
                    <br />

                    <FormLabel>Description</FormLabel>
                    <Textarea placeholder='Description'  />
                    <br />

                    <FormLabel>purchase link</FormLabel>
                    <Input type='Submit'  />
                    <br />

            </FormControl>
    </Box>
  )
}

export default AdminHome

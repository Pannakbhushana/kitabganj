import React, { useEffect, useState } from 'react';
import { Box,Grid,GridItem } from '@chakra-ui/react'
import HomeFormComponent from '../AdminComponent/HomeFormComponent';



function AdminPage() {
   
  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'} paddingTop={'80px'} minHeight={'600px'}>
        <br />
        <br />
       <HomeFormComponent/>
    </Box>
  )
}

export default AdminPage

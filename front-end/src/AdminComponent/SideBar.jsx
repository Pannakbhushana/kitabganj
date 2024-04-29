import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box,
    Text
  } from '@chakra-ui/react'
  import { CloseIcon } from '@chakra-ui/icons';
  import {Link} from "react-router-dom"

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <Box display={'flex'} justifyContent={'start'} w={'80px'} ml={'2%'}>
        <Button onClick={onOpen} colorScheme='teal' variant='outline' >
          Go to
        </Button>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px' display={'flex'} justifyContent={'space-between'}>
                <Box>Admin Page</Box>
                <Text color='red' onClick={onClose} cursor={'pointer'} ><CloseIcon/></Text>
            </DrawerHeader>
            
            <DrawerBody>
              <Box display={'flex'} justifyContent={'center'}  mt={'5%'}><Text color='blue'><Link to='/kitabganjadmin' >Home</Link></Text></Box>
              <Box display={'flex'} justifyContent={'center'}  mt={'5%'}><Text color='blue'><Link to='/admincarousel' >Sliding Image</Link></Text></Box>
              <Box display={'flex'} justifyContent={'center'} mt={'5%'}><Text  color='blue'><Link to='/adminaboutme' >About Me</Link></Text></Box>
              <Box display={'flex'} justifyContent={'center'} mt={'5%'}><Text  color='blue'><Link to='/adminpoem' >Poem</Link></Text></Box>
              <Box display={'flex'} justifyContent={'center'} mt={'5%'}><Text  color='blue'><Link to='/adminblog' >Blog</Link></Text></Box>
              <Box display={'flex'} justifyContent={'center'} mt={'5%'}><Text  color='blue'><Link to='/adminlogin' >Log In</Link></Text></Box>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
  export default SideBar;
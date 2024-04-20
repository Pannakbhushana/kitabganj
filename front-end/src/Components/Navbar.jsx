import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom';


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const styles={
    maxWidth:'60px',
    border:'1px solid gray',
    borderRadius:'50%'
  }

  return (
    <>
      <Box px={4} h={20} position='fixed' style={{ width:'100%', borderBottom:'1px solid gray' }} bg="rgba(255, 255, 255, 0.9)" zIndex={2} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link to='/'>
            <HStack spacing={2} alignItems={'center'}>
                <Box><img src="kitabganjlogo.png" alt="" style={styles} /></Box>
                  <Text fontFamily='serif' as='b'>KITABGANJ</Text>
            </HStack>
          </Link>

          <HStack as={'nav'} spacing={10} w='40%'justifyContent={'space-between'} display={{ base: 'none', md: 'flex' }}>
                <Link to='/aboutme'><Text fontSize='md' fontFamily='serif' >About Me</Text></Link>
                <Link to='/books'><Text fontSize='md'   fontFamily='serif' >Poems</Text></Link>
                <Link to='/media'><Text fontSize='md'   fontFamily='serif' >Blog</Text></Link>
                <Link to='/media'><Text fontSize='md'   fontFamily='serif' >Choti Dukaan</Text></Link>
          </HStack>
         
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                border='1px solid gray'
                  size={'md'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bg="rgba(255, 255, 255, 0.9)">
            <Stack as={'nav'} spacing={4}>
                <Link to='/aboutme'><Text fontSize='sm' fontFamily='serif' >About Me</Text></Link>
                <Link to='/books'><Text fontSize='sm'   fontFamily='serif' >Poems</Text></Link>
                <Link to='/media'><Text fontSize='sm'   fontFamily='serif' >Blog</Text></Link>
                <Link to='/media'><Text fontSize='sm'   fontFamily='serif' >Choti Dukaan</Text></Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
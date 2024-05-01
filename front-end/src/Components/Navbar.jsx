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
import {Link, NavLink} from 'react-router-dom';
import Styles from './customStyle.module.css'

let menuData=[
  {title:"About Me",path:'/aboutme'},
  {title:"Poems",path:'/poems'},
  {title:"Blog",path:'/blog'},
  {title:"Choti Dukaan",path:'/chotidukan'},
]

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
            <HStack spacing={2} alignItems={'center'} mt='5%'>
                <Box><img src="/kitabganjlogo.png" alt="" style={styles} /></Box>
                  <Text as='b'>KITABGANJ</Text>
            </HStack>
          </Link>

          <HStack as={'nav'} spacing={10} w='40%'justifyContent={'space-between'} display={{ base: 'none', md: 'flex' }}>
                {
                  menuData.map((menu,i)=>{
                    return <NavLink to={menu.path} key={i} className={({isActive})=>{
                       return isActive ?  Styles.activeNavMenu : 'none' 
                    }} >{menu.title}</NavLink>
                  })
                }
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
                    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bg="rgba(255, 255, 255, 0.9)">
            <Stack as={'nav'} spacing={4}>
                <Link to='/aboutme'><Text fontSize='sm' onClick={onClose}>About Me</Text></Link>
                <Link to='/poems'><Text fontSize='sm'onClick={onClose} >Poems</Text></Link>
                <Link to='/blog'><Text fontSize='sm' onClick={onClose}>Blog</Text></Link>
                <Link to='/chotidukan'><Text fontSize='sm' onClick={onClose}>Choti Dukaan</Text></Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
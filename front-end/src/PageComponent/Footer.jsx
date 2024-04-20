import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  HStack
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import {Link} from 'react-router-dom';


export default function Footer() {
    const styles={
        maxWidth:'60px',
        border:'1px solid gray',
        borderRadius:'50%'
      }
      
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}>
        <hr />
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>

        <Link to='/'>
            <HStack spacing={2} alignItems={'center'}>
                <Box><img src="kitabganjlogo.png" alt="" style={styles} /></Box>
                  <Text as='b'>KITABGANJ</Text>
            </HStack>
          </Link>

        <Text style={{fontSize:'12px'}}>© 2024 Kitabganj. All rights reserved | Website developed by Rahul Mishra</Text>
        <Stack direction={'row'} spacing={6}>

        <Link to={'https://www.instagram.com/kitabganj_?igsh=eTd4bGdrNXZkMGNw'}
                target='_blank' 
                style={{color:'red',fontSize:'25px'}}><FaInstagram />
          </Link>

          <Link to={'https://www.facebook.com/kitabganj/'}
                target='_blank' 
                style={{color:'blue',fontSize:'25px'}}><FaFacebook />
          </Link>

          <Link to={'https://www.youtube.com/results?search_query=kitabganj'}
                target='_blank' 
                style={{color:'red', fontSize:'25px'}}><FaYoutube />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function ProductDetails({content}) {
  const {title, description1, description2, image, purchesLink}=content
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Stack spacing={{ base: 6, md: 10 }}>
         { title &&
           <Box as={'header'}>
           <Heading
             lineHeight={1.1}
             fontWeight={600}
             fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
             {title}
           </Heading>
         </Box>
         }

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor='gray.200' />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              {description1 &&
                <Text
                color='gray.500'
                fontSize={'2xl'}
                fontWeight={'300'}>
                {description1}
              </Text>
              }
              { description2 &&
                <Text fontSize={'lg'}>
                {description2}
              </Text>
              }
            </VStack>
            { purchesLink &&
              <Box>
              <Link to={purchesLink} 
                target='_blank' 
                style={{color:'blue'}}>Buy Now <ExternalLinkIcon mx='2px' />
              </Link>
            </Box>
            }
          </Stack>

        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
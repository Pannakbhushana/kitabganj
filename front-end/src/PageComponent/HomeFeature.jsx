import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function HomeFeature({content}) {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={content.image}
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            {content.tabDescription}
          </Text>
          <Heading>{content.title}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
              {content.description}
          </Text>
        </Stack>
          <Link to={content.purchesLink} 
                target='_blank' 
                style={{color:'blue'}}>Buy Now <ExternalLinkIcon mx='2px' />
          </Link>
      </SimpleGrid>
    </Container>
  )
}
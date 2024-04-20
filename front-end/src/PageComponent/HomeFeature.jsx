import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function HomeFeature({content}) {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {content.image && <Flex>
          <Image
            rounded={'md'}
            maxHeight='500px'
            alt={'feature image'}
            src={content.image}
            objectFit={'cover'}
          />
        </Flex>}
        <Stack spacing={4}>
          { content.tabDescription &&
            <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg='blue.50'
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            {content.tabDescription}
          </Text>
          }
          {content.title && <Heading>{content.title}</Heading>}
          {content.description && <Text color={'gray.500'} fontSize={'lg'}>
              {content.description}
          </Text>}
        </Stack>
          {content.purchesLink && <Link to={content.purchesLink} 
                target='_blank' 
                style={{color:'blue'}}>Buy Now <ExternalLinkIcon mx='2px' />
          </Link>}
      </SimpleGrid>
    </Container>
  )
}
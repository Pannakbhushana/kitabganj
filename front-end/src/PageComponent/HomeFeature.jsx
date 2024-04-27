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
  const {image,tabDescription,title,description,external,imageHeight } = content;
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {image && <Flex>
          <Image
            rounded={'md'}
            maxHeight={imageHeight ? imageHeight : '500px'}
            alt={'feature image'}
            src={image}
            objectFit={'cover'}
          />
        </Flex>}
        <Stack spacing={4}>
          { tabDescription &&
            <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg='blue.50'
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            {tabDescription}
          </Text>
          }
          {title && <Heading>{title}</Heading>}
          {description && <Text color={'gray.500'} fontSize={'lg'}>
              {description}
          </Text>}
        </Stack>
          {external && <Link to={external} 
                target='_blank' 
                style={{color:'blue'}}>Buy Now <ExternalLinkIcon mx='2px' />
          </Link>}
      </SimpleGrid>
    </Container>
  )
}
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

export default function BlogCard({content}) {
    const {title, heading, description,image}=content;
  return (
    <Center py={6}>
      <Box
        w={'90%'}
        bg='white'
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        h='450px'
        overflow={'hidden'}>
        <Box h={'250px'}>
          <img style={{width:'100%', height:'100%'}}
            src={image}
            alt="image"
          />
        </Box>

        <Box>
            <Stack>
            <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                {title}
            </Text>
            <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
                overflow='hidden'
                whiteSpace='nowrap'
                textOverflow='ellipsis'
                >
                {heading}
            </Heading>
        
            <Box display={'flex'} justifyContent={'center'}>
                <Text
                color={'gray.500'}
                overflow='hidden'
                style={{ 
                    display: '-webkit-box', 
                    WebkitBoxOrient: 'vertical', 
                    WebkitLineClamp: 3, 
                    overflow: 'hidden'
                     }}
                    >
                   {description}
                </Text>
            </Box>
            </Stack>
            </Box>
        </Box>
    </Center>
  )
}

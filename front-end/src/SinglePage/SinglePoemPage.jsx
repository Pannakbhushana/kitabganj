  import {Box,Container,Stack,Text,Image,Flex,VStack,SimpleGrid,StackDivider,} from '@chakra-ui/react'
  import { useParams} from 'react-router-dom';
  import { useContext, useEffect, useState } from 'react';
  import { RenderContext } from '../ContextApi/RenderContext';
  import Loading from '../PageComponent/Loading';
  
  export default function SinglePoemPage() {
    const [poemContent, setPoemContent]=useState({});
    const { isLoading,showLoading, hideLoading } = useContext(RenderContext);
    const {title,image,description,poem}=poemContent;
    const param=useParams();
    const baseUrl=process.env.REACT_APP_API_URL;

    useEffect(()=>{
        getPoemData()
      },[])
    
      const getPoemData=()=>{
        showLoading()
        fetch(`${baseUrl}/poem?_id=${param.id}`)
          .then((res)=>res.json())
          .then((res)=>{
            hideLoading()
            setPoemContent(res[0])
          }) 
          .catch((err)=>{
            hideLoading()
            console.log(err)
          })
      }

      if(isLoading){
        return <Loading/>
      }

    return (
      <Container maxW={'7xl'} paddingTop={'80px'} minHeight={'650px'}>

       { title &&
        <Box  mt={'2%'}>
          <Text fontSize="4xl" as={'b'}>{title}</Text>
        </Box>
       }

        <SimpleGrid
          mt={{ base: 0, md:"-3%", lg: '-3%' }}
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
            {image &&
               <Flex>
                  <Image
                  rounded={'md'}
                  alt={'product image'}
                  src={image}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  />
              </Flex>
            }

          <Stack spacing={{ base: 6, md: 10 }}>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider borderColor='gray.200' />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                {description &&
                  <Text
                  color='gray.500'
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {description}
                </Text>
                }
                { poem &&
                  <Text fontSize={'lg'}>
                  {poem}
                </Text>
                }
              </VStack>
            </Stack>
  
          </Stack>
        </SimpleGrid>
      </Container>
    )
  }
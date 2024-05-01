import {Box,Container,Stack,Text,Image,Flex,VStack,SimpleGrid,StackDivider,} from '@chakra-ui/react'
import { useParams} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { RenderContext } from '../ContextApi/RenderContext';
import Loading from '../PageComponent/Loading';
  
  export default function SingleBlogPage() {
    const [data, setData]=useState({});
    const { isLoading,showLoading, hideLoading } = useContext(RenderContext);
    const {image,description,heading}=data;
    const param=useParams();
    const baseUrl=process.env.REACT_APP_API_URL;

    useEffect(()=>{
        getData()
      },[])
    
      const getData=()=>{
        showLoading()
        fetch(`${baseUrl}/blog?_id=${param.id}`)
          .then((res)=>res.json())
          .then((res)=>{
            hideLoading()
            setData(res[0])
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

      {
        heading &&  <Box mt={'4%'} >
        <Text fontSize="2xl" as={'b'}>{heading}</Text>
       </Box>
      }

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          mt={{ base: 0, md:"-3%", lg: '-3%' }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
            {
              image && 
                    <Flex>
                      <Image
                      rounded={'md'}
                      alt={'product image'}
                      src={image}
                      fit={'cover'}
                      align={'center'}
                      w={'100%'}
                      maxH={'500px'}
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
              </VStack>
            </Stack>
  
          </Stack>
        </SimpleGrid>
      </Container>
    )
  }
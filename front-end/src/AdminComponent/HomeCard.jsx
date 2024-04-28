import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Tooltip,
  } from '@chakra-ui/react'
  import { DeleteIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
  
  export default function HomeCard({content}) {
      const {title,description,image,tabDescription,external}=content;
      const [token, setToken]=useState("");

      useEffect(()=>{
        getToken()
      },[])
      
      const deleteHomeFeatureContent=()=>{
        if(!token){
          alert("Access denied !")
        }
        else{
          fetch(`http://localhost:8080/homefeature/delete/${content._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
          })
          .then((res)=>res.json())
            .then((res)=>console.log(res)) 
            .catch((err)=>console.log(err))
        }
      }

      const getToken=()=>{
        let authToken=localStorage.getItem("AdminToken");
        setToken(authToken);
      }


    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={200}
              width={282}
              objectFit={'cover'}
              src={image}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              <Box display={'flex'} justifyContent={'center'}>
                      <Text
                      overflow='hidden'
                      style={{ 
                          display: '-webkit-box', 
                          WebkitBoxOrient: 'vertical', 
                          WebkitLineClamp: 1, 
                          overflow: 'hidden'
                          }}
                          >
                      <span style={{color:'gray', fontWeight:'bold'}}>Title -</span> {title}
                      </Text>
                  </Box>
            </Heading>
            <Stack direction={'row'} align={'center'}>
            <Box display={'flex'} justifyContent={'center'}>
                  <Text
                  color={'gray.500'}
                  overflow='hidden'
                  style={{ 
                      display: '-webkit-box', 
                      WebkitBoxOrient: 'vertical', 
                      WebkitLineClamp: 2, 
                      overflow: 'hidden'
                       }}
                      >
                    <span style={{color:'gray',fontWeight:'bold'}}>Description -</span> {description}
                  </Text>
              </Box>
            </Stack>

            <Stack direction={'row'} align={'center'}>
                <Box display={'flex'} justifyContent={'center'}>
           
                  <Text
                  color='blue'
                  overflow='hidden'
                  style={{ 
                      display: '-webkit-box', 
                      WebkitBoxOrient: 'vertical', 
                      WebkitLineClamp: 2, 
                      overflow: 'hidden'
                       }}
                      >
                     <span style={{color:'gray',fontWeight:'bold'}}>Purches link -</span> {external}
                  </Text>
              </Box>
            </Stack>

            <Stack direction={'row'} align={'center'}>
                <Box display={'flex'} justifyContent={'center'}>
           
                  <Text
                  color={'gray.500'}
                  overflow='hidden'
                  style={{ 
                      display: '-webkit-box', 
                      WebkitBoxOrient: 'vertical', 
                      WebkitLineClamp: 1, 
                      overflow: 'hidden'
                       }}
                      >
                     <span style={{color:'gray',fontWeight:'bold'}}>Tab Title </span>- {tabDescription}
                  </Text>
              </Box>
            </Stack>
                  <Tooltip label='Delete'>
                    <Text fontSize={'20px'} color={'red'} onClick={deleteHomeFeatureContent} ><DeleteIcon/></Text>
                  </Tooltip>
            
          </Stack>
        </Box>
      </Center>
    )
  }
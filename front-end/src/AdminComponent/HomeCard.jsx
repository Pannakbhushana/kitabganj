import {Box,Center,useColorModeValue,Heading,Text,Stack,Image,Tooltip,useToast} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useContext, useEffect, useState } from 'react';
import {RenderContext} from "../ContextApi/RenderContext";

  export default function HomeCard({content}) {
      const {title,description,image,tabDescription,external}=content;
      const { forceRender, renderState } = useContext(RenderContext);
      const [token, setToken]=useState("");

      const toast = useToast()

      useEffect(()=>{
        getToken()
      },[forceRender])

      const handleDelete=()=>{
        if(!token){
          customAlert("fail","Access denied !")
        }
        else{
          deleteHomeFeatureContent()
        }
      }

      const deleteHomeFeatureContent=()=>{
          fetch(`http://localhost:8080/homefeature/delete/${content._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
          })
          .then((res)=>res.json())
            .then((res)=>
              {
                customAlert("success","Post deleted successfully")
                forceRender()
              })
            .catch((err)=>customAlert("fail","Something went wrong !"))
      }

      const getToken=()=>{
        let authToken=localStorage.getItem("AdminToken");
        setToken(authToken);
      }

      const customAlert=(status, msg)=>{
        if(status=='success'){
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='green.500' borderRadius={'5px'}>
                {msg}
              </Box>
            ),
          })
        }
        else if(status=='fail'){
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='#FF6347' borderRadius={'5px'}>
                {msg}
              </Box>
            ),
          })
        }
        else{
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='blue.500' borderRadius={'5px'}>
                {msg}
              </Box>
            ),
          })
        }
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
                    <Text fontSize={'20px'} color={'red'} onClick={handleDelete} ><DeleteIcon/></Text>
                  </Tooltip>
            
          </Stack>
        </Box>
      </Center>
    )
  }
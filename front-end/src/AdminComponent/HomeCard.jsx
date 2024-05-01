import {Box,Center,useColorModeValue,Heading,Text,Stack,Image,Tooltip,useToast} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useContext, useEffect, useState } from 'react';
import {RenderContext} from "../ContextApi/RenderContext";

  export default function HomeCard({content,endPoint}) {
      const {title,description,image,tabDescription,external,titleColor,textColor,poem,heading,imageHeight}=content;
      const { forceRender,showLoading, hideLoading } = useContext(RenderContext);
      const [token, setToken]=useState("");
      const toast = useToast()
      const baseUrl=process.env.REACT_APP_API_URL;

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
        showLoading()
          fetch(`${baseUrl}/${endPoint}/delete/${content._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
          })
          .then((res)=>res.json())
            .then((res)=>
              {
                hideLoading()
                customAlert("success","Post deleted successfully")
                forceRender()
              })
            .catch((err)=>{
              hideLoading()
              customAlert("fail","Something went wrong !")
              customAlert("fail",err.message)
            })
      }

      const getToken=()=>{
        let authToken=localStorage.getItem("AdminToken");
        setToken(authToken);
      }

      const customAlert=(status, msg)=>{
        if(status==='success'){
          toast({
            position: 'top',
            render: () => (
              <Box color='white' p={3} bg='green.500' borderRadius={'5px'}>
                {msg}
              </Box>
            ),
          })
        }
        else if(status==='fail'){
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
            {
              image &&
                <Image
                rounded={'lg'}
                height={200}
                width={282}
                objectFit={'cover'}
                src={image}
                alt="#"
              />
            }
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
              {
                title &&
                <Box display={'flex'} justifyContent={'center'}>
                      <Text
                      overflow='hidden'
                      color={'gray.500'}
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
              }
            </Heading>
            <Stack direction={'row'} align={'center'}>
              {heading &&
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
                    <span style={{color:'gray',fontWeight:'bold'}}>Heading -</span> {heading}
                  </Text>
                </Box>
              }
            
            </Stack>

            <Stack direction={'row'} align={'center'}>
              {imageHeight &&
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
                    <span style={{color:'gray',fontWeight:'bold'}}>Image height -</span> {imageHeight}
                  </Text>
                </Box>
              }
            
            </Stack>

            <Stack direction={'row'} align={'center'}>
              {description &&
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
              }
            
            </Stack>

            <Stack direction={'row'} align={'center'}>
              {poem &&
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
                    <span style={{color:'gray',fontWeight:'bold'}}>Poem -</span> {poem}
                  </Text>
                </Box>
              }
            
            </Stack>

            <Stack direction={'row'} align={'center'}>
                {
                  external &&
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
                }
            </Stack>

            <Stack direction={'row'} align={'center'}>
                {
                  tabDescription &&
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
                }
            </Stack>

            <Stack direction={'row'} align={'center'}>
              {titleColor &&
                <Box display={'flex'} justifyContent={'center'}>
                  <Text
                    color={'gray.500'}
                    overflow='hidden'
                      >
                    <span style={{fontWeight:'bold'}} >Title Color -{titleColor}</span> 
                  </Text>
                </Box>
              }
            
            </Stack>

            <Stack direction={'row'} align={'center'}>
              {textColor &&
                <Box display={'flex'} justifyContent={'center'}>
                  <Text
                  color={'gray.500'}
                  overflow='hidden'
                      >
                    <span style={{fontWeight:'bold'}}>Text Color -</span> {textColor}
                  </Text>
                </Box>
              }
            
            </Stack>
                  <Tooltip label='Delete'>
                    <Text fontSize={'20px'} color={'red'} onClick={handleDelete} ><DeleteIcon/></Text>
                  </Tooltip>
            
          </Stack>
        </Box>
      </Center>
    )
  }
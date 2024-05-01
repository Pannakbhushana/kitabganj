import { useEffect, useState } from 'react'
import {Box,ButtonGroup,Button,Heading,Flex,FormControl,FormLabel,Input,Textarea,Grid,GridItem,useToast} from '@chakra-ui/react'
import HomeCard from './HomeCard'
import SideBar from './SideBar';
import { useContext } from 'react';
import {RenderContext} from "../ContextApi/RenderContext"
import Loading from '../PageComponent/Loading';
import NoDataFound from '../PageComponent/NoDataFound';

export default function AdminAboutPage() {
  let initState={title:"",description:"",image:""}
  const [aboutMeContent, setAboutMeContent]=useState([]);
  const { forceRender, renderState } = useContext(RenderContext);
  const [formData, setFormData]=useState(initState)
  const [isLoading, setIsLoading]=useState(false)
  const [token, setToken]=useState("");
  const [page, setPage]=useState(1)
  const toast = useToast()
  const baseUrl=process.env.REACT_APP_API_URL;


  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  useEffect(()=>{
    getAboutMeContent(page) 
      getToken()
  },[page,renderState])


  const getToken=()=>{
    let authToken=localStorage.getItem("AdminToken");
    setToken(authToken);
  }

  const getAboutMeContent=(page)=>{
    setIsLoading(true)
    fetch(`${baseUrl}/aboutme?page=${page}&&limit=9`)
      .then((res)=>res.json())
      .then((res)=>{
        setAboutMeContent(res)
        setIsLoading(false)
      }) 
      .catch((err)=>{
        setIsLoading(false)
        customAlert("fail","Something went wrong !")
        console.log(err)
      })
  }

  const addAboutMeContent=(postData)=>{
    setIsLoading(true)
    fetch(`${baseUrl}/aboutme/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>{
        setIsLoading(false)
        forceRender()
        customAlert("success","Post added successfully")
      }) 
      .catch((err)=>{
        setIsLoading(false)
        customAlert("fail","Something went wrong !")
        console.log(err)
      })
  }

  const updateAboutMeContent=(postData,id)=>{
    setIsLoading(true)
    fetch(`${baseUrl}/aboutme/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>{
        setIsLoading(false)
        forceRender()
        customAlert("success","Post updated successfully")
      }) 
      .catch((err)=>{
        setIsLoading(false)
        customAlert("fail","Something went wrong !")
      })
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
  const handleSubmit=(e)=>{
    if(token){
      if(formData._id){
        {token && updateAboutMeContent(formData,formData._id)}
      }
      else{
        {token && addAboutMeContent(formData)}
      }
      setFormData(initState)
    }
    else{
      customAlert("fail","Access denied !")
    }
  }

  const handleCardClick=(props)=>{
    setFormData(props)
  }

if(isLoading){
  return <Loading/>
}

  return (
    <>
      <Box pt={'85px'} >
        <SideBar/>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
          
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">Customise Sliding Image About Me</Heading>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>Title</FormLabel>
          <Input id="last-name" placeholder="Title" onChange={handleChange} name='title' value={formData.title} />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'} >Image Url</FormLabel>
          <Input id="last-name" placeholder="Image url" onChange={handleChange} name='image' value={formData.image} />
        </FormControl>
        
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>Description</FormLabel>
        <Textarea placeholder='Description' onChange={handleChange} name='description' value={formData.description} />
      </FormControl>

        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">  
          <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  setFormData(initState)
                }}>
                clear
              </Button> 
              <Button
                w="7rem"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  handleSubmit()
                }}>
                Submit
              </Button> 
          </Flex>
        </ButtonGroup>
      </Box>
      </Box>
      
      <Box w='80%' marginLeft='10%' marginTop='5%'>
            { aboutMeContent.length ?
              <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)' }} gap={6}>
              {aboutMeContent.map((product,i)=>{
                  return <div key={i} onClick={()=>{handleCardClick(product)}} style={{cursor:'pointer'}}>
                            <GridItem ><HomeCard content={product} endPoint={'aboutme'} />
                          </GridItem></div>
              })}
              </Grid>:<NoDataFound/>
            }
        </Box>
           <br />
           <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' isDisabled={page<=1} onClick={()=>{setPage(page-1)}}>Prev</Button>
                    <Button colorScheme='teal' variant='ghost' isDisabled>{page}</Button>
                    <Button colorScheme='teal' variant='outline' isDisabled={aboutMeContent.length<9} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </>
  )
}

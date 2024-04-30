import { useEffect, useState } from 'react'
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Grid,
  GridItem,
  useToast
} from '@chakra-ui/react'

import HomeCard from './HomeCard'
import SideBar from './SideBar';
import { useContext } from 'react';
import {RenderContext} from "../ContextApi/RenderContext"
import Loading from '../PageComponent/Loading';
import NoDataFound from '../PageComponent/NoDataFound';



export default function AdminPoem() {
  let initState={title:"",description:"",image:"",poem:"",imageHeight:""}
  const [poemContent, setPoemContent]=useState([]);
  const { forceRender, renderState } = useContext(RenderContext);
  const [formData, setFormData]=useState(initState)
  const [isLoading, setIsLoading]=useState(false)
  const [token, setToken]=useState("");
  const [page, setPage]=useState(1)
  const toast = useToast()


  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  useEffect(()=>{
    getPoemContent(page) 
      getToken()
  },[page,renderState])


  const getToken=()=>{
    let authToken=localStorage.getItem("AdminToken");
    setToken(authToken);
  }

  const getPoemContent=(page)=>{
    setIsLoading(true);
    fetch(`http://localhost:8080/poem?page=${page}&&limit=9`)
      .then((res)=>res.json())
      .then((res)=>{
        setIsLoading(false);
        setPoemContent(res)
      }) 
      .catch((err)=>{
        setIsLoading(false);
        customAlert("fail",err.message)
        console.log(err)
      })
  }

  const addPoemContent=(postData)=>{
    setIsLoading(true);
    fetch("http://localhost:8080/poem/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>{
        setIsLoading(false);
        forceRender()
        customAlert("success","Post added successfully")
      }) 
      .catch((err)=>{
        setIsLoading(false);
        customAlert("fail","Something went wrong !")
        customAlert("fail",err.message)
      })
  }

  const updatePoemContent=(postData,id)=>{
    setIsLoading(true);
    fetch(`http://localhost:8080/poem/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>{
        setIsLoading(false);
        forceRender()
        customAlert("success","Post updated successfully")
      }) 
      .catch((err)=>{
        setIsLoading(false);
        customAlert("fail","Something went wrong !")
        customAlert("fail",err.message);
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
        {token && updatePoemContent(formData,formData._id)}
      }
      else{
        {token && addPoemContent(formData)}
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
          
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Customise Poem Page </Heading>

      <Flex>
        <FormControl>
          <FormLabel  fontWeight={'normal'}>Title</FormLabel>
          <Input  placeholder="Title" onChange={handleChange} name='title' value={formData.title} />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel  fontWeight={'normal'} >Image Url</FormLabel>
          <Input  placeholder="Image url" onChange={handleChange} name='image' value={formData.image} />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel  fontWeight={'normal'} >Image Height</FormLabel>
          <Input  placeholder="eg: 200px" onChange={handleChange} name='imageHeight' value={formData.imageHeight} />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel fontWeight={'normal'}>Description</FormLabel>
        <Input placeholder='description' onChange={handleChange} name='description' value={formData.description} />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel fontWeight={'normal'}>Poem</FormLabel>
        <Textarea placeholder='Poem' onChange={handleChange} name='poem' value={formData.poem} />
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
        {
          poemContent.length ? <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)' }} gap={6}>
          {poemContent.map((product,i)=>{
              return <div key={i} onClick={()=>{handleCardClick(product)}} style={{cursor:'pointer'}}>
                        <GridItem ><HomeCard content={{
                                                       _id:product._id,
                                                       title:product.title,
                                                       description:product.description,
                                                       image:product.image,
                                                       imageHeight:product.imageHeight,
                                                       poem:product.poem
                                                      }} endPoint={'poem'} />
                      </GridItem></div>
          })}
          </Grid> : <NoDataFound/>
        }
        </Box>
           <br />
           <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' isDisabled={page<=1} onClick={()=>{setPage(page-1)}}>Prev</Button>
                    <Button colorScheme='teal' variant='ghost' isDisabled>{page}</Button>
                    <Button colorScheme='teal' variant='outline' isDisabled={poemContent.length<9} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </>
  )
}

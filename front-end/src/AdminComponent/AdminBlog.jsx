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



export default function AdminBlog() {
  let initState={title:"",description:"",image:"",heading:""}
  const [blogContent, setPoemContent]=useState([]);
  const { forceRender, renderState } = useContext(RenderContext);
  const [formData, setFormData]=useState(initState)
  const [token, setToken]=useState("");
  const [page, setPage]=useState(1)
  const toast = useToast()


  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  useEffect(()=>{
    getBlogContent(page) 
      getToken()
  },[page,renderState])


  const getToken=()=>{
    let authToken=localStorage.getItem("AdminToken");
    setToken(authToken);
  }

  const getBlogContent=(page)=>{
    fetch(`http://localhost:8080/blog?page=${page}&&limit=9`)
      .then((res)=>res.json())
      .then((res)=>setPoemContent(res)) 
      .catch((err)=>{
        customAlert("fail",err.message)
        console.log(err)
      })
  }

  const addBlogContent=(postData)=>{
    fetch("http://localhost:8080/blog/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>{
        forceRender()
        customAlert("success","Post added successfully")
      }) 
      .catch((err)=>customAlert("fail","Something went wrong !"))
  }

  const updateBlogContent=(postData,id)=>{
    fetch(`http://localhost:8080/blog/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>{
        forceRender()
        customAlert("success","Post updated successfully")
      }) 
      .catch((err)=>customAlert("fail","Something went wrong !"))
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
        {token && updateBlogContent(formData,formData._id)}
      }
      else{
        {token && addBlogContent(formData)}
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
          
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Customise Blog Page </Heading>

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
        <FormLabel fontWeight={'normal'}>Description</FormLabel>
        <Input placeholder='description' onChange={handleChange} name='description' value={formData.description} />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel fontWeight={'normal'}>Heading</FormLabel>
        <Textarea placeholder='heading' onChange={handleChange} name='heading' value={formData.heading} />
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
            <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)' }} gap={6}>
            {blogContent.length && blogContent.map((product,i)=>{
                return <div key={i} onClick={()=>{handleCardClick(product)}} style={{cursor:'pointer'}}>
                          <GridItem ><HomeCard content={{
                                                         _id:product._id,
                                                         title:product.title,
                                                         description:product.description,
                                                         image:product.image,
                                                         heading:product.heading
                                                        }} endPoint={'blog'} />
                        </GridItem></div>
            })}
            </Grid>
        </Box>
           <br />
           <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' isDisabled={page<=1} onClick={()=>{setPage(page-1)}}>Prev</Button>
                    <Button colorScheme='teal' variant='ghost' isDisabled>{page}</Button>
                    <Button colorScheme='teal' variant='outline' isDisabled={blogContent.length<9} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </>
  )
}

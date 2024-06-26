import { useEffect, useState } from 'react'
import {Box,ButtonGroup,Button,Heading,Flex,FormControl,FormLabel,Input,Textarea,Grid,GridItem,useToast} from '@chakra-ui/react'
import HomeCard from './HomeCard'
import SideBar from './SideBar';
import { useContext } from 'react';
import {RenderContext} from "../ContextApi/RenderContext"
import Loading from '../PageComponent/Loading';
import NoDataFound from '../PageComponent/NoDataFound';

export default function AdminCarousel() {
  let initState={titleColor:"",textColor:"",title:"",text:"",image:""}
  const [carouselContent, setCarouselContent]=useState([]);
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
    getCarouselContent(page) 
      getToken()
  },[page,renderState])


  const getToken=()=>{
    let authToken=localStorage.getItem("AdminToken");
    setToken(authToken);
  }

  const getCarouselContent=(page)=>{
    setIsLoading(true)
    fetch(`${baseUrl}/carousel?page=${page}&&limit=9`)
      .then((res)=>res.json())
      .then((res)=>{
        setIsLoading(false)
        setCarouselContent(res)
      }) 
      .catch((err)=>{
        setIsLoading(false);
        customAlert("fail",err.message)
        console.log(err)
      })
  }

  const addCarouselContent=(postData)=>{
    setIsLoading(true);
    fetch(`${baseUrl}/carousel/add`, {
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

  const updateCarouselContent=(postData,id)=>{
    setIsLoading(true);
    fetch(`${baseUrl}/carousel/update/${id}`, {
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
        customAlert("fail",err.message)
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
        {token && updateCarouselContent(formData,formData._id)}
      }
      else{
        {token && addCarouselContent(formData)}
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
          
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Customise Sliding Image</Heading>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>Title color</FormLabel>
          <Input id="last-name" placeholder="Title color" onChange={handleChange} name='titleColor' value={formData.titleColor} />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>Text color</FormLabel>
          <Input id="last-name" placeholder="Text color" onChange={handleChange} name='textColor' value={formData.textColor} />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>Title</FormLabel>
          <Input id="last-name" placeholder="Title" onChange={handleChange} name='title' value={formData.title} color={formData.titleColor}/>
        </FormControl>
      </Flex>

      <Flex>
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'} >Image Url</FormLabel>
          <Input id="last-name" placeholder="Image url" onChange={handleChange} name='image' value={formData.image} />
        </FormControl>
        
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>Text</FormLabel>
        <Textarea placeholder='text' onChange={handleChange} name='text' value={formData.text} color={formData.textColor} />
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
        {carouselContent.length ?
         <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)' }} gap={6}>
         {carouselContent.map((product,i)=>{
             return <div key={i} onClick={()=>{handleCardClick(product)}} style={{cursor:'pointer'}}>
                       <GridItem ><HomeCard content={{
                                                      _id:product._id,
                                                      title:product.title,
                                                      description:product.text,
                                                      image:product.image,
                                                      titleColor:product.titleColor,
                                                      textColor:product.textColor
                                                     }} endPoint={'carousel'} />
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
                    <Button colorScheme='teal' variant='outline' isDisabled={carouselContent.length<9} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </>
  )
}

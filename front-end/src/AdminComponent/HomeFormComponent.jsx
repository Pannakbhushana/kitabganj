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
  GridItem
} from '@chakra-ui/react'

// import { useToast } from '@chakra-ui/react'
import HomeCard from './HomeCard'


export default function HomeFormComponent() {
  let initState={tabDescription:"",title:"",description:"",image:"",external:""}
  const [homeFeatureContent, setHomeFeatureContent]=useState([]);
  const [formData, setFormData]=useState(initState)
  const [token, setToken]=useState("");
  

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  useEffect(()=>{
      getHomeFeatureContent() 
      getToken()
  },[])

  // const toast = useToast()

  const getToken=()=>{
    let authToken=localStorage.getItem("AdminToken");
    setToken(authToken);
  }

  const getHomeFeatureContent=(page)=>{
    fetch(`http://localhost:8080/homefeature`)
      .then((res)=>res.json())
      .then((res)=>setHomeFeatureContent(res)) 
      .catch((err)=>console.log(err))
  }

  const addHomeFeatureContent=(postData)=>{
    fetch("http://localhost:8080/homefeature/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>console.log(res)) 
      .catch((err)=>console.log(err))
  }

  const updateHomeFeatureContent=(postData,id)=>{
    fetch(`http://localhost:8080/homefeature/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(postData)
    })
    .then((res)=>res.json())
      .then((res)=>console.log(res)) 
      .catch((err)=>console.log(err))
  }

  const handleSubmit=(e)=>{
    if(token){
      if(formData._id){
        {token && updateHomeFeatureContent(formData,formData._id)}
      }
      else{
        {token && addHomeFeatureContent(formData)}
      }
      setFormData(initState)
    }
    else{
      alert("Access denied !")
    }
  }

  const handleCardClick=(props)=>{
    setFormData(props)
  }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
          
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">Add Home Features</Heading>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>Tab text</FormLabel>
          <Input id="first-name" placeholder="Tab Description" onChange={handleChange} name='tabDescription' value={formData.tabDescription} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>Title</FormLabel>
          <Input id="last-name" placeholder="Title" onChange={handleChange} name='title' value={formData.title} />
        </FormControl>
      </Flex>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>Purches Link</FormLabel>
          <Input id="first-name" placeholder="purches link" onChange={handleChange} name='external' value={formData.external} />
        </FormControl>

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
                  // toast({
                  //   title: ' new Post Added',
                  //   // description: "post",
                  //   status: 'success',
                  //   duration: 3000,
                  //   isClosable: true,
                  // })
                }}>
                Submit
              </Button> 
          </Flex>
        </ButtonGroup>
      </Box>
      
      <Box w='80%' marginLeft='10%' marginTop='5%'>
            <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)' }} gap={6}>
            {homeFeatureContent.map((product,i)=>{
                return <div key={i} onClick={()=>{handleCardClick(product)}} style={{cursor:'pointer'}}>
                          <GridItem ><HomeCard content={product} />
                        </GridItem></div>
            })}
            </Grid>
        </Box>
    </>
  )
}
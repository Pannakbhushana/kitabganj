import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {useNavigate} from "react-router-dom";
import Loading from '../PageComponent/Loading';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formState, setFormState]=useState({email:"",password:""})
  const [isLoading, setIsLoading]=useState(false)
  const navigate=useNavigate();
  const toast = useToast()

  const handleChange=(e)=>{
    setFormState({...formState, [e.target.name]:e.target.value})
  }

  const handleSubmit=()=>{
    if(formState.email && formState.password){
        authenticate(formState);
        setFormState({email:"",password:""});
    }
    else{
      customAlert("fail","Email or Password can't be empty !")
    }
  }

  const authenticate=(data)=>{
    setIsLoading(true);
      fetch("http://localhost:8080/admin/kitabganj/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
      })
      .then((res)=>res.json())
      .then((res)=>{
        if(res.token){
            setIsLoading(false);
            localStorage.setItem("AdminToken",res.token);
            customAlert("success","Log in successful")
            navigate("/kitabganjadmin")
        }
        else{
          setIsLoading(false);
          customAlert("fail","Wrong credentials !")
        }

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
    else{
      toast({
        position: 'top',
        render: () => (
          <Box color='white' p={3} bg='#FF6347' borderRadius={'5px'}>
            {msg}
          </Box>
        ),
      })
    }
  }

if(isLoading){
  return <Loading/>
}

  return (
    <Flex
      paddingTop={'80px'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' placeholder='email' value={formState.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='password' placeholder='password' value={formState.password} onChange={handleChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
              <Button
                onClick={()=>{
                    localStorage.removeItem("AdminToken");
                    let token=localStorage.getItem("AdminToken");
                    if(!token){
                        customAlert("success","Log out successful !")
                    }
                    else{
                      customAlert("fail","Not able to logout")
                    }
                }}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Logout
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
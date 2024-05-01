import { Box,Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import ProductDetails from '../PageComponent/ProductDetails'
import HomeFeature from '../PageComponent/HomeFeature'
import {RenderContext} from "../ContextApi/RenderContext" 
import Loading from '../PageComponent/Loading'

export default function AboutMe() {
  const [aboutMeContent, setAboutMeContent]=useState([]);
  const { isLoading,showLoading, hideLoading } = useContext(RenderContext);
  const baseUrl=process.env.REACT_APP_API_URL;

  useEffect(()=>{
    getAboutMeData()
  },[])

  const getAboutMeData=()=>{
    showLoading()
    fetch(`${baseUrl}/aboutme`)
      .then((res)=>res.json())
      .then((res)=>{
        hideLoading()
        setAboutMeContent(res)
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
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'} >
      <Box display="flex" justifyContent="start" ml='2%' mt={'1%'}>
        <Text fontSize="2xl" as="b">परिचय : </Text>
      </Box>
        {aboutMeContent.length && 
          aboutMeContent.map((content,index)=>{
           return <Box key={index}>
                  {aboutMeContent && 
                    (content.title ||
                    content.description ||
                    content.image) &&
                   <HomeFeature content={content}/>}
            </Box>
          })}
    </Box>
  )
}

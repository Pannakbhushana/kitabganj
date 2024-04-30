import React, { useContext, useEffect, useState } from 'react'
import CaptionCarousel from '../Components/CaptionCarousel'
import { Box,Button } from '@chakra-ui/react'
import HomeFeature from '../PageComponent/HomeFeature'
import {RenderContext} from "../ContextApi/RenderContext" 
import Loading from '../PageComponent/Loading'
import NoDataFound from '../PageComponent/NoDataFound'

function Home() {
  const [carouselData, setCarouselData]=useState([]);
  const [homeFeatureContent, setHomeFeatureContent]=useState([]);
  const [page, setPage]=useState(1)
  const { isLoading,showLoading, hideLoading } = useContext(RenderContext);

  useEffect(()=>{
    getCarouselData()
    getHomeFeatureContent(page)
  },[page])

  const getCarouselData=()=>{
    showLoading()
    fetch("http://localhost:8080/carousel")
      .then((res)=>res.json())
      .then((res)=>{
        hideLoading()
        setCarouselData(res)
      }) 
      .catch((err)=>{
        hideLoading()
        console.log(err)
      })
  }

  const getHomeFeatureContent=(page)=>{
    showLoading()
    fetch(`http://localhost:8080/homefeature?page=${page}&&limit=5`)
      .then((res)=>res.json())
      .then((res)=>{
        hideLoading()
        setHomeFeatureContent(res)
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
    <Box position={'relative'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
      <CaptionCarousel cards={carouselData}/>
        <br />
        <br />
        {
          homeFeatureContent.length ? <>{
            homeFeatureContent.map((content,index)=>{
             return <Box key={index}>
             {content && 
               (content.title ||
               content.description ||
               content.image) &&
              <HomeFeature content={content}/>}
       </Box>
            })} </>:<NoDataFound/>
        }
        
           <br />
           <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' isDisabled={page<=1} onClick={()=>{setPage(page-1)}}>Prev</Button>
                    <Button colorScheme='teal' variant='ghost' isDisabled>{page}</Button>
                    <Button colorScheme='teal' variant='outline' isDisabled={homeFeatureContent.length<5} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </Box>
  )
}

export default Home

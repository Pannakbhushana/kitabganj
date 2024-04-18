import React from 'react'
import CaptionCarousel from '../Components/CaptionCarousel'
import { Box } from '@chakra-ui/react'

function Home() {
  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'} zIndex={-1} paddingTop={'80px'}>
      <CaptionCarousel/>
      <div style={{border:'1px solid black',width:'100%', height:'1200px'}}>
    </div>
    </Box>
  )
}

export default Home

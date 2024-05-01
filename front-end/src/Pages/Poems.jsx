import React, { useContext, useEffect, useState } from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import HomeFeature from '../PageComponent/HomeFeature'
import styles from '../Components/customStyle.module.css'
import { Link } from 'react-router-dom'
import {RenderContext} from "../ContextApi/RenderContext" 
import Loading from '../PageComponent/Loading'
import NoDataFound from '../PageComponent/NoDataFound'

function Poems() {
  const [page, setPage]=useState(1)
  const [poemContent, setPoemContent]=useState([]);
  const { isLoading,showLoading, hideLoading } = useContext(RenderContext);

  useEffect(()=>{
    getPoemData(page)
  },[page])

  const getPoemData=(page)=>{
    showLoading()
    fetch(`http://localhost:8080/poem?page=${page}&&limit=10`)
      .then((res)=>res.json())
      .then((res)=>{
        hideLoading()
        setPoemContent(res)
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
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
        <br />
        <Box display='flex' justifyContent='start' marginLeft='2%'>
            <Text fontSize='2xl' as='b'>किताबगंज की कविताएं</Text>
        </Box>
        {
          poemContent.length ? <>{
            poemContent.map((content,index)=>{
             return <Box key={index}>
                    <Link to={`/poemdetails/${content._id}`}>
                      <Box className={styles.poemCard}>
                          {content && 
                              (content.title ||
                              content.description ||
                              content.image) &&
                          <HomeFeature content={content}/>}
                      </Box>
                    </Link>
              </Box>
            })}</> :<NoDataFound/>
        }
        
            <br />
           <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' isDisabled={page<=1} onClick={()=>{setPage(page-1)}}>Prev</Button>
                    <Button colorScheme='teal' variant='ghost' isDisabled>{page}</Button>
                    <Button colorScheme='teal' variant='outline' isDisabled={poemContent.length<10} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </Box>
  )
}

export default Poems
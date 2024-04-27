import React, { useEffect, useState } from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import HomeFeature from '../PageComponent/HomeFeature'
import styles from '../Components/customStyle.module.css'
import { Link } from 'react-router-dom'

function Poems() {
  const [page, setPage]=useState(1)
  const [poemContent, setPoemContent]=useState([]);

  useEffect(()=>{
    getPoemData(page)
  },[page])

  const getPoemData=(page)=>{
    fetch(`http://localhost:8080/poem?page=${page}&&limit=3`)
      .then((res)=>res.json())
      .then((res)=>setPoemContent(res)) 
      .catch((err)=>console.log(err))
  }

  return (
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
        <br />
        <Box display='flex' justifyContent='start' marginLeft='2%'>
            <Text fontSize='2xl' as='b'>किताबगंज की कविताएं</Text>
        </Box>
        {poemContent && 
          poemContent.map((content,index)=>{
           return <Box key={index}>
                  <Link to={`/details/${index}`}>
                    <Box className={styles.poemCard}>
                        {content && 
                            (content.title ||
                            content.description ||
                            content.image) &&
                        <HomeFeature content={content}/>}
                    </Box>
                  </Link>
            </Box>
          })}
            <br />
           <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' isDisabled={page<=1} onClick={()=>{setPage(page-1)}}>Prev</Button>
                    <Button colorScheme='teal' variant='ghost' isDisabled>{page}</Button>
                    <Button colorScheme='teal' variant='outline' isDisabled={poemContent.length<3} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </Box>
  )
}

export default Poems
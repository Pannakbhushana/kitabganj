import React, { useEffect, useState } from 'react'
import { Box,Grid,GridItem ,Button} from '@chakra-ui/react'
import ProductCard from '../PageComponent/ProductCard'
import { Link } from "react-router-dom";

function ChotiDukan() {
  const [products, setProducts]=useState([]);
  const [page, setPage]=useState(1)

  useEffect(()=>{
    getProductData(page)
  },[page])
 
  const getProductData=(page)=>{
    fetch(`http://localhost:8080/chotidukaan?page=${page}&&limit=12`)
      .then((res)=>res.json())
      .then((res)=>setProducts(res)) 
      .catch((err)=>console.log(err))
  }
  return (
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
      <Box w='80%' marginLeft='10%' marginTop='5%'>
        <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)' }} gap={6}>
          {products.map((product,i)=>{
            return <GridItem key={i} >
              <Link to={`/details/${i}`}>
                  <ProductCard content={product}/>
              </Link>
                  </GridItem>
          })}
        </Grid>
      </Box>
           <br />
           <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline' isDisabled={page<=1} onClick={()=>{setPage(page-1)}}>Prev</Button>
                    <Button colorScheme='teal' variant='ghost' isDisabled>{page}</Button>
                    <Button colorScheme='teal' variant='outline' isDisabled={products.length<12} onClick={()=>{setPage(page+1)}}>Next</Button>
                </Box>
                <br />
                <br />
    </Box>
  )
}

export default ChotiDukan

import { Box } from '@chakra-ui/react'
import React from 'react';
import ProductDetails from '../PageComponent/ProductDetails';

let data={
    // tabDescription:'MY STORY',
    id:1,
    imageHeight:'200px',
    title:`लोरेम इप्सम`,
    description:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों `,
    image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVG_aQDPbJHfWpn6gN-HsdOt8_8yQs6153yUaar4_FV5eBBs9JRHQXCvyu6zVU6-fW-4&usqp=CAU`,
    // purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
    poem:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
    Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
    Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
    Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
    `
  }

function SingleProductPage() {
  return (
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
        <ProductDetails content={{title:data.title,image:data.image,poem:data.poem}} />
    </Box>
  )
}

export default SingleProductPage
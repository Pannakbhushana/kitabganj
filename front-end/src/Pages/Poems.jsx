import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import HomeFeature from '../PageComponent/HomeFeature'
import ProductDetails from '../PageComponent/ProductDetails'
import styles from '../Components/customStyle.module.css'
import { Link } from 'react-router-dom'

const poemContent=[
  {
  homeFeatureData:{
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
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`
  },
  productDetailsData:{
    id:2,
    imageHeight:'200px',
    title:'Lorem Ipsum',
    description1:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation `,
    image:`https://t3.ftcdn.net/jpg/00/49/39/96/360_F_49399679_36Q4IcU6gylzCffI4Yc3BB3Oq6yD6Q70.jpg`,
    // purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
    poem:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
    Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`
  }
},
{
    homeFeatureData:{
      // tabDescription:'MY STORY',
      id:3,
      imageHeight:'200px',
      title:`लोरेम इप्सम`,
      description:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों `,
      image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVG_aQDPbJHfWpn6gN-HsdOt8_8yQs6153yUaar4_FV5eBBs9JRHQXCvyu6zVU6-fW-4&usqp=CAU`,
      // purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
      poem:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
    Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`
    },
    productDetailsData:{
      id:4,
      imageHeight:'200px',
      title:'Lorem Ipsum',
      description1:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation `,
      image:`https://t3.ftcdn.net/jpg/00/49/39/96/360_F_49399679_36Q4IcU6gylzCffI4Yc3BB3Oq6yD6Q70.jpg`,
      // purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
      poem:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
    Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`
    }
  },
]

function Poems() {
  return (
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
        <br />
        <Box display='flex' justifyContent='start' marginLeft='2%'>
            <Text fontSize='2xl' as='b'>किताबगंज की कविताएं</Text>
        </Box>
        {poemContent && 
          poemContent.map((content,index)=>{
           return <Box key={index}>
                  <Link to={`/poems/${index}`}>
                    <Box className={styles.poemCard}>
                        {content.homeFeatureData && 
                            (content.homeFeatureData.title ||
                            content.homeFeatureData.description ||
                            content.homeFeatureData.image) &&
                        <HomeFeature content={content.homeFeatureData}/>}
                    </Box>
                  </Link>

                  <Link to={`/poems/${index}`}>
                    <Box className={styles.poemCard}>
                        {content.productDetailsData && 
                            (content.productDetailsData.title ||
                            content.productDetailsData.description1 ||
                            content.productDetailsData.description2 ||
                            content.productDetailsData.image)
                            
                            && <ProductDetails content={content.productDetailsData}/>}
                    </Box>
                  </Link>
            </Box>
          })}
          <br />
          <br />
                <Box display='flex' justifyContent='center'>
                    <Button colorScheme='teal' variant='outline'>Prev</Button>
                    <Button colorScheme='teal' variant='ghost'>1</Button>
                    <Button colorScheme='teal' variant='outline'>Next</Button>
                </Box>
                <br />
                <br />
    </Box>
  )
}

export default Poems
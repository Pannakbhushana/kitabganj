import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductDetails from '../PageComponent/ProductDetails'
import HomeFeature from '../PageComponent/HomeFeature'

// const aboutMeContent=[
//   {
//   homeFeatureData:{
//     title:`लोरेम इप्सम`,
//     description:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
//     अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों 
//     से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में 
//     Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker 
//     Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.आम धारणा के विपरीत 
//     Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े से जुड़ा है, 
//     जो इसे 2000 वर्ष से अधिक प्राचीन बनाता है. Richard McClintock, हेम्प्डन-वर्जीनिया में सिडनी कॉलेज में एक लैटिन प्रोफेसर है, 
//     ने एक Lorem इप्सुम में से एक और अधिक अस्पष्ट लैटिन शब्द देखा और शास्त्रीय साहित्य के शहर में जाते हुए असंदेहदास्पक स्रोत की 
//     खोज की. Lorem Ipsum सिसरौ(Sisero) द्वारा "De Finibus Bonorum et Malorum" (अच्छाई और बुराई की चरम सीमा) 
//     के 1.10.32 और 1.10.33 वर्गों से आता है जो ४५ BC में`,
//     image:`https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600`,
//   },
//   productDetailsData:{
//     title:'Lorem Ipsum',
//     description1:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
//     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation `,
//     description2:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at 
//     delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiisporro, quae, quisquam 
//     quos reprehenderit velit? Natus, totam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
//     irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
//     anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis`,
//     image:`https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
//   }
// }]

export default function AboutMe() {
  const [aboutMeContent, setAboutMeContent]=useState([]);

  useEffect(()=>{
    getAboutMeData()
  },[])

  const getAboutMeData=()=>{
    fetch("http://localhost:8080/aboutme")
      .then((res)=>res.json())
      .then((res)=>setAboutMeContent(res)) 
      .catch((err)=>console.log(err))
  }

  return (
    <Box position={'relative'} minHeight={'600px'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
        {aboutMeContent && 
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

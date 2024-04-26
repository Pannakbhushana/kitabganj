import React, { useEffect, useState } from 'react'
import CaptionCarousel from '../Components/CaptionCarousel'
import { Box } from '@chakra-ui/react'
import HomeFeature from '../PageComponent/HomeFeature'
import ProductDetails from '../PageComponent/ProductDetails'

const homeFeatureContent=[
  {
    tabDescription:'TOP STORY',
    title:`न तो इसमें इस काल का मानव इतिहास है और न ही...`,
    description:`इस किताब में कविताएँ हैं। इससे ज्यादा ख़ास इस किताब में कुछ नहीं। न तो इसमें इस काल का मानव इतिहास है और न ही कोई गूढ़ बौद्धिक रहस्य है। रात बे-रात कॉपी पर आड़ी तिरछी बनाई गईं रेखाएं भर हैं जिसे इसे लिखने वाले ने कविता होने का दावा किया है`,
    image:`https://m.media-amazon.com/images/I/91niP2px4sL._SY425_.jpg`,
    purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
  },
  {
    tabDescription:'',
    title:'गुप्त प्रेमपत्र',
    description:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों 
    से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में 
    Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker 
    Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.आम धारणा के विपरीत 
    Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े से जुड़ा है,`,
    image:`https://images.unsplash.com/photo-1634562876572-5abe57afcceb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxldHRlcnxlbnwwfHwwfHx8MA%3D%3D`,
    purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
  },
  {
    tabDescription:'Review',
    title:`Must read book for poems lovers`,
    description:`If you are a poetry lover, either reader or writer or both this book is a must read one for everyone. @Piya`,
    image:`https://m.media-amazon.com/images/I/81ayxafnkWL.jpg`,
    purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
  }
]

function Home() {
  const [carouselData, setCarouselData]=useState([]);

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    fetch("http://localhost:8080/carousel")
      .then((res)=>res.json())
      .then((res)=>setCarouselData(res)) 
      .catch((err)=>console.log(err))
  }

  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
      <CaptionCarousel cards={carouselData}/>
        <br />
        <br />
        {homeFeatureContent && 
          homeFeatureContent.map((content,index)=>{
           return <Box key={index}>
           {content && 
             (content.title ||
             content.description ||
             content.image) &&
            <HomeFeature content={content}/>}
     </Box>
          })}
    </Box>
  )
}

export default Home

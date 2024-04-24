import React from 'react'
import CaptionCarousel from '../Components/CaptionCarousel'
import { Box } from '@chakra-ui/react'
import HomeFeature from '../PageComponent/HomeFeature'
import ProductDetails from '../PageComponent/ProductDetails'

const homeFeatureContent=[
  {
  homeFeatureData:{
    tabDescription:'TOP STORY',
    title:`न तो इसमें इस काल का मानव इतिहास है और न ही...`,
    description:`इस किताब में कविताएँ हैं। इससे ज्यादा ख़ास इस किताब में कुछ नहीं। न तो इसमें इस काल का मानव इतिहास है और न ही कोई गूढ़ बौद्धिक रहस्य है। रात बे-रात कॉपी पर आड़ी तिरछी बनाई गईं रेखाएं भर हैं जिसे इसे लिखने वाले ने कविता होने का दावा किया है`,
    image:`https://m.media-amazon.com/images/I/91niP2px4sL._SY425_.jpg`,
    purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
  },
  productDetailsData:{
    title:'गुप्त प्रेमपत्र',
    description1:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों `,
    description2:`Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
    अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों 
    से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में 
    Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker 
    Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.आम धारणा के विपरीत 
    Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े से जुड़ा है,`,
    image:`https://images.unsplash.com/photo-1634562876572-5abe57afcceb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxldHRlcnxlbnwwfHwwfHx8MA%3D%3D`,
    purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
  }
},
{
  homeFeatureData:{
    tabDescription:'Review',
    title:`Must read book for poems lovers`,
    description:`If you are a poetry lover, either reader or writer or both this book is a must read one for everyone. @Piya`,
    image:`https://m.media-amazon.com/images/I/81ayxafnkWL.jpg`,
    purchesLink:`https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD`,
  },
}]

const carouselData = [
    {
      textColor:'',
      title: `देवता मर सकते हैं...`,
      text: `क्योंकि देवता मर सकते हैं, प्रेम और पहाड़ कभी नहीं।। `,
      image:`https://c4.wallpaperflare.com/wallpaper/132/345/276/nature-shadow-wallpaper-preview.jpg`,
    },
    {
      title: 'तुम्हारे मोहल्ले का...',
      text: `तुम्हारे मोहल्ले का चप्पा चप्पा याद हो।`,
      image:'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-healing-power-of-nature-psycho-shadow.jpg',
    },
    {
      titleColor:'#FFFFFF',
      textColor:'#FFFFFF',
      title: 'सैर दुनिया की...',
      text: `सैर दुनिया की करके बोलो हम क्या करेंगे?`,
      image:`https://img.pikbest.com/wp/202408/nature-abstract-s-force-3d-illustration-of-a-rock-with-lush-green-background-and-realistic-tree-shadow-blending-natural-elements_9780861.jpg!w700wp`
    },
    {
      titleColor:'',
      textColor:'',
      title: 'मुझे नहीं था पता...',
      text: `मुझे नहीं था पता कि बादल आते कहाँ से हैं। वो घर के गमलों में सावन लगाती थी। `,
      image:`https://i.pinimg.com/originals/12/28/eb/1228ebfb3bbc33aa8622f7554bf7c08a.jpg`
    },
    {
      titleColor:'',
      textColor:'#FFFFFF',
      title: 'ईश्वर तुम्हें भूलने नहीं देता...',
      text: `ईश्वर तुम्हें भूलने नहीं देता-और बाज़ार तुमसे मिलने नहीं देता। `,
      image:`https://media.istockphoto.com/id/1444101433/photo/flying-drone-over-large-lake-with-view-of-mountain-peaks.jpg?s=612x612&w=0&k=20&c=dwnQotYKTgqowjls7RV_59e2RL5iaJM-JhAgSZ8al4w=`
    },
  ]



function Home() {
  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
      <CaptionCarousel cards={carouselData}/>
        <br />
        <br />
        {homeFeatureContent && 
          homeFeatureContent.map((content,index)=>{
           return <Box key={index}>
           {content.homeFeatureData && 
             (content.homeFeatureData.title ||
             content.homeFeatureData.description ||
             content.homeFeatureData.image) &&
            <HomeFeature content={content.homeFeatureData}/>}

           {content.productDetailsData && 
             (
               content.productDetailsData.title ||
               content.productDetailsData.description1 ||
               content.productDetailsData.description2 ||
               content.productDetailsData.image 
             )
             && <ProductDetails content={content.productDetailsData}/>}
     </Box>
          })}
    </Box>
  )
}

export default Home

import React, { useContext, useEffect, useState } from 'react'
import CaptionCarousel from '../Components/CaptionCarousel'
import { Box,Button } from '@chakra-ui/react'
import HomeFeature from '../PageComponent/HomeFeature'
import {RenderContext} from "../ContextApi/RenderContext" 
import Loading from '../PageComponent/Loading'
import NoDataFound from '../PageComponent/NoDataFound'

let initStateCarousel=[
  {
    _id: "6628a3eba12eb19d886d57d9",
    textColor: "black",
    title: "देवता मर सकते हैं...",
    text: "क्योंकि देवता मर सकते हैं, प्रेम और पहाड़ कभी नहीं।।",
    image: "https://c4.wallpaperflare.com/wallpaper/132/345/276/nature-shadow-wallpaper-preview.jpg",
    titleColor: "black"
},
{
    _id: "6628a604c36a10abd1a4f381",
    textColor: "black",
    title: "तुम्हारे मोहल्ले का...",
    text: "तुम्हारे मोहल्ले का चप्पा चप्पा याद हो।",
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-healing-power-of-nature-psycho-shadow.jpg",
    titleColor: "black"
},
{
    _id: "6628a68e68761ba6be09f4a0",
    titleColor: "#FFFFFF",
    textColor: "#FFFFFF",
    title: "सैर दुनिया की...",
    text: "सैर दुनिया की करके बोलो हम क्या करेंगे?",
    image: "https://img.pikbest.com/wp/202408/nature-abstract-s-force-3d-illustration-of-a-rock-with-lush-green-background-and-realistic-tree-shadow-blending-natural-elements_9780861.jpg!w700wp"
},
{
    _id: "6628a6ed68761ba6be09f4a2",
    titleColor: "black",
    textColor: "black",
    title: "मुझे नहीं था पता...",
    text: "मुझे नहीं था पता कि बादल आते कहाँ से हैं। वो घर के गमलों में सावन लगाती थी। ",
    image: "https://i.pinimg.com/originals/12/28/eb/1228ebfb3bbc33aa8622f7554bf7c08a.jpg"
},
{
    _id: "6628a74368761ba6be09f4a4",
    titleColor: "",
    textColor: "#FFFFFF",
    title: "ईश्वर तुम्हें भूलने नहीं देता...",
    text: "ईश्वर तुम्हें भूलने नहीं देता-और बाज़ार तुमसे मिलने नहीं देता। ",
    image: "https://media.istockphoto.com/id/1444101433/photo/flying-drone-over-large-lake-with-view-of-mountain-peaks.jpg?s=612x612&w=0&k=20&c=dwnQotYKTgqowjls7RV_59e2RL5iaJM-JhAgSZ8al4w="
}
]

let initStateHomeFeaturesContent=[
  {
      _id: "662b4f7788fbfe58d7f9e50f",
      tabDescription: "TOP STORY",
      title: "न तो इसमें इस काल का मानव इतिहास है और न ही...",
      description: "इस किताब में कविताएँ हैं। इससे ज्यादा ख़ास इस किताब में कुछ नहीं। न तो इसमें इस काल का मानव इतिहास है और न ही कोई गूढ़ बौद्धिक रहस्य है। रात बे-रात कॉपी पर आड़ी तिरछी बनाई गईं रेखाएं भर हैं जिसे इसे लिखने वाले ने कविता होने का दावा किया है",
      image: "https://m.media-amazon.com/images/I/91niP2px4sL._SY425_.jpg",
      external: "https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD"
  },
  {
      _id: "662b502588fbfe58d7f9e511",
      tabDescription: "testing-",
      title: "गुप्त प्रेमपत्र",
      description: "Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.आम धारणा के विपरीत  Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है. यह 45 ई.पू. से शास्त्रीय लैटिन साहित्य के एक टुकड़े से जुड़ा है,",
      image: "https://images.unsplash.com/photo-1634562876572-5abe57afcceb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxldHRlcnxlbnwwfHwwfHx8MA%3D%3D",
      external: "https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD"
  },
  {
      _id: "662b505088fbfe58d7f9e513",
      tabDescription: "Review",
      title: "Must read book for poems lovers",
      description: "If you are a poetry lover, either reader or writer or both this book is a must read one for everyone. @Piya",
      image: "https://m.media-amazon.com/images/I/81ayxafnkWL.jpg",
      external: "https://www.amazon.in/Fafoond-Prashant-Sagar/dp/B08KRHP3RD"
  }
]


function Home() {
  const [carouselData, setCarouselData]=useState(initStateCarousel);
  const [homeFeatureContent, setHomeFeatureContent]=useState(initStateHomeFeaturesContent);
  const [page, setPage]=useState(1)
  const { isLoading,showLoading, hideLoading } = useContext(RenderContext);
  const baseUrl=process.env.REACT_APP_API_URL;

  useEffect(()=>{
    getCarouselData()
    getHomeFeatureContent(page)
  },[page])

  const getCarouselData=()=>{
    showLoading()
    fetch(`${baseUrl}/carousel`)
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
    fetch(`${baseUrl}/homefeature?page=${page}&&limit=5`)
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

  // if(isLoading){
  //   return <Loading/>
  // }

  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'} paddingTop={'80px'}>
      {carouselData.length && <CaptionCarousel cards={carouselData}/>}
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

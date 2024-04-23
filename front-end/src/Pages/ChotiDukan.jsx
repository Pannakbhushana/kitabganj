import { Box,Grid,GridItem ,Button} from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../PageComponent/ProductCard'
import { Link } from "react-router-dom";

function ChotiDukan() {
  let arr=[0,1,2,3,4,5,6,7,8,,9,2,4]
  const products=[
    {
      title: "The Art of T-Shirt Design",
      description: "Explore the fascinating world of t-shirt design with this comprehensive guide. From concept to creation, learn the techniques and principles behind crafting stunning designs that make a statement.",
      image: "https://piperandivy.com/cdn/shop/products/book-tree-heather-forest-unisex-tee-piper-and-ivy.png?v=1661722046&width=1080"
    },
    {
      title: "Healthy Cooking Recipes",
      description: "Discover a collection of delicious and nutritious recipes that will tantalize your taste buds while promoting a healthy lifestyle. From hearty salads to savory soups, there's something for everyone in this cookbook.",
      image: "https://media.istockphoto.com/id/887636042/photo/the-start-of-something-delicious.jpg?s=612x612&w=0&k=20&c=2T_BCJQhhkfohcbcDZ14OV8rPStICJ9Q1_YjGUW2wCo="
    },
    {
      title: "Gardening Tips for Beginners",
      description: "Get started on your gardening journey with these essential tips and tricks for beginners. Learn how to cultivate a vibrant garden oasis, even if you've never touched a trowel before.",
      image: "https://hips.hearstapps.com/hmg-prod/images/proud-gardener-royalty-free-image-539829042-1555499812.jpg"
    },
    {
      title: "The Ultimate Workout Guide",
      description: "Transform your fitness routine with this comprehensive workout guide. From strength training to cardio, discover effective exercises and training strategies to help you reach your fitness goals.",
      image: "https://img.freepik.com/free-photo/young-happy-sportswoman-getting-ready-workout-tying-shoelace-fitness-center_637285-470.jpg"
    },
    {
      title: "Mindfulness Meditation Handbook",
      description: "Embark on a journey of self-discovery and inner peace with this mindfulness meditation handbook. Learn practical techniques to reduce stress, increase focus, and cultivate a sense of calm in your daily life.",
      image: "https://www.shutterstock.com/image-photo/man-meditating-doing-yoga-by-260nw-2274359207.jpg"
    },
    {
      title: "DIY Home Décor Projects",
      description: "Spruce up your living space with these creative and budget-friendly DIY home décor projects. From upcycled furniture to handmade accessories, unleash your inner decorator and transform your home.",
      image: "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo="
    },
    {
      title: "Photography Composition Techniques",
      description: "Master the art of photography composition with this comprehensive guide. From rule of thirds to leading lines, learn how to compose visually striking images that captivate viewers' attention.",
      image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-wdnet-212372.jpg&fm=jpg"
    },
    {
      title: "The Science of Coffee Brewing",
      description: "Dive into the fascinating world of coffee brewing with this scientifically-backed guide. Explore different brewing methods, understand the chemistry behind extraction, and elevate your coffee game.",
      image: "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg"
    },
    {
      title: "Financial Planning Essentials",
      description: "Take control of your finances with this essential guide to financial planning. From budgeting to investing, learn practical strategies to build wealth, secure your future, and achieve financial freedom.",
      image: "https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak="
    },
    {
      title: "Artificial Intelligence Basics",
      description: "Demystify the world of artificial intelligence with this beginner-friendly guide. Explore the fundamentals of AI, from machine learning to neural networks, and discover its real-world applications.",
      image: "https://imageio.forbes.com/specials-images/imageserve/643016813686d8eafca00875//960x0.jpg?height=473&width=711&fit=bounds"
    },
    {
      title: "The Psychology of Happiness",
      description: "Unlock the secrets to lasting happiness with this insightful exploration of positive psychology. Learn evidence-based techniques to cultivate happiness, resilience, and fulfillment in your life.",
      image: "https://www.shutterstock.com/shutterstock/photos/1954316851/display_1500/stock-photo-enjoying-life-concept-harmony-and-positive-mind-hand-setting-white-natural-stone-stack-to-balance-1954316851.jpg"
    },
    {
      title: "Creative Writing Inspiration",
      description: "Ignite your creativity and unleash your imagination with this inspirational guide to creative writing. From character development to plot structure, discover the tools and techniques to craft compelling stories.",
      image: "https://media.istockphoto.com/id/1035462384/photo/close-up-woman-hand-writing-on-notebook.jpg?s=612x612&w=0&k=20&c=xVEbAAJ3mnolrGjQ5WDoSUAlofUAkCp1mYuDwLFYWiM="
    }
  ]
  
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
                    <Button colorScheme='teal' variant='outline'>Prev</Button>
                    <Button colorScheme='teal' variant='ghost'>1</Button>
                    <Button colorScheme='teal' variant='outline'>Next</Button>
                </Box>
                <br />
                <br />
    </Box>
  )
}

export default ChotiDukan

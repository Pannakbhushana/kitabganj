import React, { useState } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel() {
  const [slider, setSlider] = useState(null)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  const cards = [
    {
      title: `मृदु भावों के अंगूरों की...`,
      text: `मृदु भावों के अंगूरों की आज बना लाया हाला, प्रियतम, अपने ही हाथों से आज पिलाऊँगा प्याला, पहले भोग लगा लूँ तेरा फिर प्रसाद जग पाएगा,सबसे पहले तेरा स्वागत करती मेरी मधुशाला।`,
      image:
        'https://thumbs.dreamstime.com/b/poetry-book-under-tree-blurs-summer-sunset-background-78316985.jpg',
    },
    {
      title: 'ये कैसा सुर...',
      text: `ये कैसा सुर है, ये कैसा गगन है, ये कैसी मधुशाला है। जहां तलक निगाहें दौड़ती हैं,पेय है, प्याला है।`,
      image:'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'लहरों का है ये शोर कैसा...',
      text: `लहरों का है ये शोर कैसा, आकाश छूने का हुंकार। तूफानों से जूझता सागर,है वीरता का पावन धार।`,
      image:`https://media.istockphoto.com/id/1444101433/photo/flying-drone-over-large-lake-with-view-of-mountain-peaks.jpg?s=612x612&w=0&k=20&c=dwnQotYKTgqowjls7RV_59e2RL5iaJM-JhAgSZ8al4w=`
    },
  ]

  return (
    <Box position={'relative'} height={'550px'} width={'full'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        color='white'
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        color='white'
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            width='100%'
            h={'100%'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>

            {/*customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="black">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
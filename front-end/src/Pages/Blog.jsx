import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import BlogCard from "../PageComponent/BlogCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
      _hover={{
        background: "#00B8D4",
        color: "white",
        transform: "scale(1.2)", 
      }}
      onClick={onClick}
      aria-label="Previous"
      position="absolute"
      marginTop="225px"
      left="0"
      marginLeft="5%"
      zIndex={2}
    >
      <ChevronLeftIcon />
    </Button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
    _hover={{
      background: "#00B8D4",
      color: "white",
      transform: "scale(1.2)", 
    }}
      onClick={onClick}
      aria-label="Previous"
      marginTop="-530px"
      marginRight="-85%"
      zIndex={2}
    >
      <ChevronRightIcon />
    </Button>
  );
};

const data = {
  BlogData: [
    {
      id: 5,
      title: "लेख",
      heading: "छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है",
      description: `Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
      Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`,
      image: `https://t3.ftcdn.net/jpg/00/49/39/96/360_F_49399679_36Q4IcU6gylzCffI4Yc3BB3Oq6yD6Q70.jpg`,
    },
    {
      id: 6,
      title: "कहानि",
      heading: "छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है",
      description: `Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
      Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`,
      image: `https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`,
    },
    {
      id: 7,
      title: "लेख",
      heading: "छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है",
      description: `Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
      Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`,
      image: `https://thumbs.dreamstime.com/b/concept-photo-burning-bush-tree-god-talks-to-moses-ideal-bible-story-prophecy-etc-gods-presence-131085075.jpg`,
    },
    {
      id: 8,
      title: "कहानि",
      heading: "छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है",
      description: `Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
      Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`,
      image: `https://media.istockphoto.com/id/1279460648/photo/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-small-child-fantasy-nature.jpg?s=612x612&w=0&k=20&c=yK_dL8T7CjeYpNTvkXecPxQDDw9WczC8FB9bCO2McOw=`,
    },
    {
      id: 9,
      title: "लेख",
      heading: "छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है",
      description: `Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों
      Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से 
      अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों`,
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh96F9VOUjfwtFZ4Z7SW5s-mgFwi8PqiD9KuIVSwyDNyX8Bzi3ImikWd4VdMAGoVhNWD4&usqp=CAU`,
    },
  ],
};

function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box
      position={"relative"}
      minHeight={"600px"}
      width={"full"}
      overflow={"hidden"}
      paddingTop={"80px"}
    >
      <Box display="flex" justifyContent="start" marginLeft="2%" marginTop="2%">
        <Text fontSize="2xl" as="b">
          किताबगंज की कहानियां और लेख : यात्रा सीरीज
        </Text>
      </Box>

      <Box position="relative">
        <Slider {...settings}>
          {data.BlogData.map((blog, i) => {
            return (
              <Link to={`/details/${i}`} key={i}>
                {" "}
                <BlogCard content={blog} />
              </Link>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}

export default Blog;

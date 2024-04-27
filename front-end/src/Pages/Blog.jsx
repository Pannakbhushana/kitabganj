import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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

function Blog() {
  const [blogData, setBlogData]=useState([]);

  useEffect(()=>{
    getBloData()
  })

  const getBloData=()=>{
    fetch("http://localhost:8080/blog")
      .then((res)=>res.json())
      .then((res)=>setBlogData(res)) 
      .catch((err)=>console.log(err))
  }

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
          {blogData.map((blog, i) => {
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

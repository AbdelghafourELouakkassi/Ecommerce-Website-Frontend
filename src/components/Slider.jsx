import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import shoppingImage1 from '../assets/shoppingImage3.jpg'
import shoppingImage2 from '../assets/shoppingImage2.jpg'

import mens from '../assets/mens.jpg'
import women from '../assets/women.jpg'
import {Box,Stack } from '@mui/material';

function Slider() {
  return (
    <Stack direction={'row'}  height={'500px'} width={'85%'} mx={'auto'} sx={
      {
        height:{xs:"100%",sm:"500px"},
        widht:{xs:"100%",sm:"80%"},
      }
    }  >
        <Box sx={{width:{xs:"100%",md:"80%"} }} >
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><img src={shoppingImage1}  width={'100%'} /></SwiperSlide>
                <SwiperSlide><img src={shoppingImage2}  width={'100%'} /></SwiperSlide>
            </Swiper>
        </Box>
        <Box width={'20%'} sx={{display:{xs:"none",md:"block",} }}>
            <Stack  height={'97%'}   gap={2} ml={2} >
                <Box  height={'50%'}>
                   <img src={women} height={'100%'} width={'100%'}   alt="women-image" />
                </Box>
                <Box  height={'50%'}>
                  <img src={mens} height={'100%'} width={'100%'}  alt="mens-image" />
                </Box>
            </Stack>
        </Box>
    </Stack>
  )
}

export default Slider
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "../index.css";
import 'swiper/css/navigation';

export default function Swipers() {
    return (
        <div style={{ width: '1000px', height: '400px', marginInline: 'auto', position: 'relative' }}>
            <button className="custom-prev">قبل</button>
            <button className="custom-next">بعد</button>
            <Swiper
            dir="rtl"
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                modules={[Navigation]}
            >
                <SwiperSlide dir="rtl">Slide 1</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 2</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 3</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 4</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 5</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 6</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 7</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 8</SwiperSlide>
                <SwiperSlide dir="rtl">Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}

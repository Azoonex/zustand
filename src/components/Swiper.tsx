import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "../index.css";
import 'swiper/css/navigation';

export default function Swipers() {

    const items = [
        { name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' },
        { name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' },
        { name: 'Item 7' }, { name: 'Item 8' }, { name: 'Item 9' },
        { name: 'Item 10' }, { name: 'Item 11' }, { name: 'Item 12' },
        { name: 'Item 13' }, { name: 'Item 14' }, { name: 'Item 15' },
        { name: 'Item 16' }, { name: 'Item 17' }, { name: 'Item 18' },
        { name: 'Item 19' }, { name: 'Item 20' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + itemsPerPage, items.length));
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - itemsPerPage, 0));
    };

    const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage);
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


            <div>
                <ul>
                    {currentItems.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
                <button onClick={handlePrev} disabled={currentIndex === 0}>قبلی</button>
                <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= items.length}>بعدی</button>
            </div>
        </div>
    )
}

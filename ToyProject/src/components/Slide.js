import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Navigation } from "swiper";

function Slide({ postlist }) {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {postlist.Post_img.map((el) => (
                    <SwiperSlide>
                        <img src={el} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
export default Slide;

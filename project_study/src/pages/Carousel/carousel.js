/*
    Carousel(캐로셀)을 구현하기 전 라이브러리 비교
    react slick과 react swiper를 비교하였다.
    다운로드수 부터 star차이가 swiper가 압도적이였다.
    다른것은 비교할게 많이 없음 코드품질이라는것도 lv5만점 중 swiper는 lv4로 검증했다.
*/
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import styled from 'styled-components'

function Carousel() {
	return (
		<>
			<h1>Swiper</h1>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={50}
				slidesPerView={4}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide>
					<Img src="https://cdn.shoemarker.co.kr/Upload/ProductImage/010202/23021_1_0320_0320.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<Img src="https://m.shoemarker.co.kr/Upload/ProductImage/010202/23022_1_0500_0500.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UP_5YtKHvPN8UXVybPq60ebF7r0fXg2i2g&usqp=CAU" />
				</SwiperSlide>
				<SwiperSlide>
					<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXgHNmawPlWC5x3vH6rxDkO8gsCQ9SDw8Pw&usqp=CAU" />
				</SwiperSlide>
				<SwiperSlide>
					<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wyQhdjED1S_kPb7NMQzHzrwDRz_BK6KN1w&usqp=CAU" />
				</SwiperSlide>
				<SwiperSlide>
					<Img src="https://xn--oi2bn3sl1dnoc.com/data/editor/2209/thumb-20220906152921_dd0b314a42c4f94712b9313a8dbd0869_mjwm_300x300.jpg" />
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Carousel
const Img = styled.img`
	width: 300px;
	height: 250px;
`

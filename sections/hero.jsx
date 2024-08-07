import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { heroData } from '@/api/hero'

import HeroSlide from '@/components/HeroSlide'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function Hero({ }) {  

  return (
    <section className="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        // Run in loop and autoplay
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        className={`
          w-full
        `}
      >
        {
          heroData.map((slide, index) => (
            <SwiperSlide
              key={index}
            >
              <HeroSlide 
                title={slide.title}
                subtitle={slide.subtitle}
                ctaLink={slide.ctaLink}
                ctaText={slide.ctaText}
                imageSrc={`/images/hero-${index + 1}.webp`}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}
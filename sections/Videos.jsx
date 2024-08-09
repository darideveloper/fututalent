
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'

import Title from '@/components/Title'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function Videos() {

  const maxVideos = 8
  const videosSrc = Array.from({ length: maxVideos }, (_, i) => `/videos/work-${i + 1}.mp4`) 

  return (
    <section
      className={`
        about
        mx-auto
        my-28
        bg-purple-dark
        py-16
      `}
    >
      <div
        className={`
          container
          mx-auto
        `}
      >
        <Title
          className={`
            text-white
          `}
        >
          Videos
        </Title>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Navigation, A11y, Autoplay]}
            navigation
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            className={`
              mx-auto
              my-12
              px-6
              flex
              justify-center
              items-center
              gap-6 lg:gap-28
              small
              w-10/12 md:w-full
            `}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {
              videosSrc.map((videoSrc, index) => (
              <SwiperSlide
                key={index}
                className={`
                  bg-white
                  rounded-lg
                `}
              >
                <video 
                  src={videoSrc}
                  className={`
                    w-full
                    h-full
                    object-cover
                    opacity-90
                    rounded-lg
                  `}
                  muted
                  loop
                  autoPlay
                  lazy="loading"
                  preload="none"
                />
              </SwiperSlide>
              ))
            }

          </Swiper>
      </div>

    </section>
  )
}
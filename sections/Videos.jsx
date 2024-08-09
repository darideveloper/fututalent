
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'

import Title from '@/components/Title'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function Videos() {

  const maxVideos = 9
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
              w-full
              mx-auto
              my-12
              px-6
              flex
              justify-center
              items-center
              gap-6 lg:gap-28
            `}
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
                    opacity-95
                    rounded-lg
                  `}
                  muted
                  loop
                />
              </SwiperSlide>
              ))
            }

          </Swiper>
      </div>

    </section>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'

import Title from '@/components/Title'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/**
 * TextGalleryTemplate section template
 * @param {object} props - component props
 * @param {string} props.id - section id
 * @param {number} props.imagesNum - number of images to display in slider
 * @param {string} props.imagesPrefix - image filename prefix
 * @param {string} props.title - section title
 * @param {string[]} props.texts - section texts
 * @returns {JSX.Element} TextGalleryTemplate section template
 */
export default function TextGalleryTemplate({ id, imagesNum, imagesPrefix, title, texts, className }) {

  const imagesSrc = Array.from({ length: imagesNum }, (_, i) => `/images/${imagesPrefix}-${i + 1}.webp`)

  return (
    <section
      className={`
        ${id}
        mx-auto
        bg-purple-dark
        py-20
        ${className}
      `}
      id={id}
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
          {title}
        </Title>

        <div
          className={`
            content
            mx-auto
            my-12
            px-6
            flex
            flex-col md:flex-row
            justify-center
            items-center
            gap-6 lg:gap-28
            w-full
          `}
        >
          <p
            className={`
              text-white
              w-full md:w-1/2 lg:w-1/2
              flex
              flex-col
              justify-center
              items-center
              gap-6
            `}
          >
            {
              texts.map((text, index) => (
                <span key={index}>
                  {text}
                </span>
              ))
            }
              
          </p>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, A11y, Autoplay]}
            navigation
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            className={`
              w-full md:w-1/2 lg:w-1/2
              flex
              justify-center
              items-center
              small
            `}
          >
            {
              imagesSrc.map((imageSrc, index) => (
                <SwiperSlide
                  key={index}
                  className={`
                  bg-white
                  rounded-lg
                `}
                >
                  <Image
                    src={imageSrc}
                    alt="Foto de niños jugando"
                    width={1000}
                    height={750}
                    loading="lazy"
                    className={`
                    w-full
                    h-full
                    object-cover
                    opacity-95
                    rounded-lg
                  `}
                  />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>

    </section>
  )
}
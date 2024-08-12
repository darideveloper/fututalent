
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'

import Title from '@/components/Title'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function CareModel() {

  const maxImages = 5
  const imagesSrc = Array.from({ length: maxImages }, (_, i) => `/images/care-${i + 1}.webp`) 

  return (
    <section
      className={`
        about
        mx-auto
        my-28
        bg-purple-dark
        py-16
      `}
      id="care-model"
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
          Modelo de atención
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
            max-w-6xl
          `}
        >
          <p
            className={`
              text-white
              w-full md:w-1/2 lg:w-1/2
            `}
          >
            En <strong>Fututalent</strong> creemos en el poder del potencial humano y en la capacidad de cada individuo para alcanzar un futuro brillante y lleno de oportunidades. Somos una organización dedicada al desarrollo de planes de vida y carrera para niños y jóvenes egresados de casas hogar, con el objetivo de perfilar a cada uno hacia un futuro seguro e independiente. Nuestra misión es transformar vidas a través de programas personalizados que empoderan a los jóvenes con las herramientas, habilidades y conocimientos necesarios para prosperar en el ámbito.
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
                  height={1000}
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

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'

import Title from '@/components/Title'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function Linkage() {

  const maxImages = 3
  const imagesSrc = Array.from({ length: maxImages }, (_, i) => `/images/linkage-${i + 1}.webp`)

  return (
    <section
      className={`
        linkage
        mx-auto
        bg-purple-dark
        py-20
      `}
      id="linkage"
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
          Vinculación
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
            <span>
              En nuestro espíritu organizacional está el sembrar las semillas de productividad y crecimiento profesional en las nuevas generaciones, conectando a jóvenes de casas hogar con empresas, emprendedores y profesionistas para perfilar el futuro que ellos desean desde edades tempranas. A través de estas conexiones, los jóvenes obtienen una visión más clara de sus metas e inician su plan de vida independiente, al mismo tiempo que adquieren habilidades prácticas.
            </span>
            <span>
              Al contactar con empresas les ofrecemos una ventana al mundo profesional, así mismo,, contar con aliados profesionistas significa que nuestros jóvenes pueden conocer de primera mano las realidades y satisfacciones de distintas profesiones para encontrar su propia vocación, mientras que, por medio del emprendimiento les mostramos cómo transformar su creatividad en oportunidades reales que ellos mismos pueden capitalizar.
            </span>
            <span>
              Sea cual sea su decisión, nosotros estamos aquí para apoyarlos.
            </span>
            <span>
              Prepararse para un futuro lleno de posibilidades es el impulso que necesitan para seguir adelante en su formación y estar lo mejor preparados posible al momento de egresar de la institución de cuidado temporal. Sé parte de este cambio, e inspira a la próxima generación de talentos.
            </span>
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
import { idelogyData } from '@/data/ideology'
import { fontTitle } from '@/data/fonts'

import Title from '@/components/Title'
import Image from 'next/image'


export default function Ideology({ }) {

  return (
    <section
      className={`
        about
        container
        mx-auto
        mb-28
      `}
      id="ideology"
    >
      <Title
        className={`
          my-12
        `}
      >
        Nosotros
      </Title>

      <section
        className={`
          cards-wrapper
          grid
          grid-cols-1
          gap-6
          max-w-4xl
          mx-auto
        `}
      >
        {
          idelogyData.map((idelogy, index) => (
            <article
              className={`
                card
                flex
                flex-col
                relative
                cursor-pointer
                group
                bg-purple-light
                py-24
              `}
              key={index}
            >
              <div className="overlay">

                <h3
                  className={`
                    title
                    duration-300
                    ${fontTitle.className}
                    text-center
                    text-5xl
                    font-bold
                    capitalize
                    bg-purple group-hover:bg-transparent
                    w-full
                    text-white group-hover:text-purple
                    py-2
                    mt-0 group-hover:mt-4
                    opacity-80 group-hover:opacity-100

                    absolute group-hover:inline-block
                    z-20
                    top-1/2 group-hover:top-2 md:group-hover:top-8
                    left-1/2 group-hover:left-0
                    transform
                    -translate-x-1/2 group-hover:translate-y-0
                    -translate-y-1/2 group-hover:translate-x-0
                  `}
                >
                  {idelogy.title}
                </h3>

                {/* Dynamic image src */}
                <Image
                  src={`/images/ideology-${index + 1}.webp`}
                  alt={`Imagen de ${idelogy.title}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  className={`
                    duration-500
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    object-cover
                    z-10
                    group-hover:opacity-0
                  `}
                />
              </div>

              <p
                className={`
                  text-center
                  mt-28 md:mt-36
                  mb-6 md:mb-16
                  px-6 md:px-6 lg:px-20
                `}
              >
                {idelogy.description}
              </p>

            </article>
          ))
        }
      </section>

    </section>
  )
}
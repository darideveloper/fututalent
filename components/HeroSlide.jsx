import { fontTitle } from '@/libs/fonts' 

import Image from 'next/image'
import Button from '@/components/Button'


/**
 * Hero slide component.
 * 
 * @param {object} props - component props
 * @param {string} props.title - slide title
 * @param {string} props.subtitle - slide subtitle
 * @param {string} props.ctaLink - link to navigate to
 * @param {string} props.ctaText - button text
 * @param {string} props.imageSrc - image source
 * @returns {JSX.Element} - rendered Hero slide
 */
export default function HeroSlide({ title, subtitle, ctaLink, ctaText, imageSrc }) {

  const titleWords = title.split(' ')
  const titleLastWord = titleWords[titleWords.length - 1]

  return (
    <div
      className={`
        hero-slide
        flex
        flex-col
        justify-center
        items-center
        width-full
        py-14 md:py-32 lg:py-52
        px-4
        relative
        text-center
      `}
    >
      <h1
        className={`
          ${fontTitle.className}
          text-3xl md:text-5xl
        `}
      >
        {/* Highlight last word */}
        <span>
          {titleWords.slice(0, titleWords.length - 1).join(' ')}&nbsp;
        </span>
        <span
          className={`
            text-purple
            font-bold
            underline
          `}
        >
          {titleLastWord}
        </span>
      </h1>
      <p
        className={`
          text-lg
          mt-4
        `}
      >
        {subtitle}
      </p>
      
      <Button
        link={ctaLink}
        text={ctaText}
        className={`
          mt-32
        `}
      />

      {/* Image with auto generated src */}
      <Image
        src={imageSrc}
        alt="Foto de niños jugando"
        width={1200}
        height={600}
        className={`
          image-bg
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2
          -translate-y-1/2
          -z-20
          bg-cover
          w-full
          h-full
          object-cover
          opacity-30
        `}
      />
    </div>
  )
}
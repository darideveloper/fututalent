import Title from '@/components/Title'
import ImageFrame from '@/components/ImageFrame'

/**
 * Text image section template
 * 
 * @param {object} props - component props
 * @param {JSX.Element} props.title - section title
 * @param {string} props.imageSrc - image source
 * @param {string} props.imageAlt - image alt text
 * @param {JS.Element} props.text - section text
 * @param {boolean} props.reverse - reverse image and text order
 * @returns {JSX.Element} Text image section template
 */
export default function TextImageTamplate({ title, imageSrc, imageAlt, text, reverse = false}) {
  return (
    <section 
      className={`
        about
        container
        mx-auto
        my-28

        px-4
        flex
        flex-col ${reverse ? 'md:flex-row' : 'md:flex-row-reverse'}
        items-center
        justify-center
        gap-6
        
      `}
    >
      <div 
        className={`
          text
          w-full md:w-1/2
        `}
      >
        <Title>
          {title}
        </Title>

        <p
          className={`
            text-center md:text-left
            my-8
          `}
        >
          {text}
        </p>
      </div> 

      <ImageFrame 
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
      />
      
    </section>
  )
}
import Image from 'next/image'

/**
 * Image frame component.
 * @param {object} props - component props
 * @param {string} props.src - image source
 * @param {string} props.alt - image alt text
 * @param {string} props.className - component classes
 * @returns 
 */
export default function ImageFrame({ src, alt, className }) {
  return (
    <div
      className={`
          image-wrapper
          mx-auto
          mb-4
          w-11/12 md:w-5/12
          opacity-90
          bg-purple-dark
          rounded-md
          grpup
          mx-30
        `}
    >
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={800}
        className={`
          transform
          duration-300
          translate-x-4 hover:translate-x-0
          translate-y-4 hover:translate-y-0
          rounded-md
          ${className}
        `}
      />
    </div>
  )
}
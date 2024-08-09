import Link from 'next/link'

/**
 * CTA (Call to Action) button component.
 * 
 * @param {object} props - component props
 * @param {string} props.link - link to navigate to
 * @param {string} props.text - button text
 * @param {string} props.className - button extra classes
 * @returns {JSX.Element} - rendered CTA button
 */
export default function Cta({ link, text, className }) {
  return (
    <Link
      href={link}
      className={`
        btn
        bg-primary
        px-10
        py-2
        rounded-lg
        bg-purple hover:bg-white
        text-white hover:text-purple
        text-2xl
        border-2
        border-purple
        duration-300
        hover:scale-105
        ${className}
      `}
    >
      {text}
    </Link>
  )
}
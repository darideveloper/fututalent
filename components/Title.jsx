import { fontTitle } from "@/data/fonts"

/**
 * Title component
 * 
 * @param {object} props - component props
 * @param {string} props.children - title content
 * @param {string} props.className - extra classes
 * @returns 
 */
export default function Title ({ children, className }) {
  return (
    <h2
      className={`
        title
        ${fontTitle.className}
        text-3xl
        text-center
        ${className}
      `}
    >
      {children}
    </h2>
  )
}
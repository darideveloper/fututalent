// import Footer from "@/sections/footer"
import Header from "@/sections/header"
import Contact from "@/sections/contact"
import { fontBody } from "@/libs/fonts"

/**
 * Root layout component.
 * @param {object} props - component props
 * @param {JSX.Element} props.children - page content
 * @returns {JSX.Element} - rendered Root layout
 */
export default function RootLayout ({children}) {

  return (
    <>
      <Header />
      <main
        className={`
          w-full
          overflow-x-hidden
          ${fontBody.className}
        `}
      >
        {children}
      </main>
      <Contact />
      {/* <Footer /> */}
    </>
  )
}
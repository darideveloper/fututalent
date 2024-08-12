// import Footer from "@/sections/footer"
import Header from "@/sections/header"
import Contact from "@/sections/contact"
import Head from "next/head"

import { fontBody } from "@/libs/fonts"
import { metaData } from "@/libs/meta"

/**
 * Root layout component.
 * @param {object} props - component props
 * @param {JSX.Element} props.children - page content
 * @param {string} props.pageTitle - title of current subpage
 * @returns {JSX.Element} - rendered Root layout
 */
export default function RootLayout ({children, pageTitle}) {

  return (
    <>
      {/* Metadata */}
      <Head>
        <title>{pageTitle ? `${pageTitle} | ${metaData.title}` : metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />       
      </Head>
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
import { metaData } from "@/data/meta"

import Footer from "@/sections/Footer"
import Header from "@/sections/Header"
import Head from "next/head"

/**
 * Root layout component.
 * @param {object} props - component props
 * @param {JSX.Element} props.children - page content
 * @param {string} props.pageTitle - title of current subpage
 * @returns {JSX.Element} - rendered Root layout
 */
export default function Layout ({children, pageTitle}) {

  return (
    <>
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
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
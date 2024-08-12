import "@/styles/globals.sass"

import Layout from "@/sections/Layout"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

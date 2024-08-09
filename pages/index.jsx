import Header from "@/sections/Header"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Ideology from "@/sections/Ideology"
import Videos from "@/sections/Videos"
import Founder from "@/sections/Founder"
import CareModel from "@/sections/CareModel"
import Importance from "@/sections/Importance"
import Contact from "@/sections/Contact"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Ideology />
        <Videos />
        <Founder />
        <CareModel />
        <Importance />
        <Contact />
      </main>
    </>
  )
}

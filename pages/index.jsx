import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Ideology from "@/sections/Ideology"
import Videos from "@/sections/Videos"
import Founder from "@/sections/Founder"
import CareModel from "@/sections/CareModel"
import Importance from "@/sections/Importance"
import RootLayout from "@/layouts/RootLayout"

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Ideology />
      <Videos />
      <Founder />
      <CareModel />
      <Importance />
    </RootLayout>
  )
}

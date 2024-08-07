import Hero from "@/sections/hero"
import { fontBody } from "@/libs/fonts"

export default function Home() {
  return (
    <main
      className={`
        ${fontBody.className}
        container
        mx-auto
      `}
    >
      <Hero />
    </main>
  )
}

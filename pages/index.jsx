import Hero from "@/sections/Hero"
import { fontBody } from "@/libs/fonts"

export default function Home() {
  return (
    <main
      className={`
        ${fontBody.className}
      `}
    >
      <Hero />
    </main>
  )
}

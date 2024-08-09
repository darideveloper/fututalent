import Image from 'next/image'
import TextImageTamplate from '@/sections/templates/TextImageTamplate'

export default function About({ }) {

  const title = (
    <>
      <Image
        src="/images/logo.webp"
        alt="Logo fututalent"
        width={200}
        height={200}
        className={`
          mx-auto
          mb-4
        `}
      />
      Bienvenido!
    </>
  )

  const text = (
    <>
      En <strong>Fututalent</strong>, creemos en el poder del potencial humano y en la capacidad de cada individuo para alcanzar un <strong>futuro brillante y lleno de oportunidades</strong>.
      <br />
      Somos una organización dedicada al <strong>desarrollo de planes de vida y carrera para niños y jóvenes egresados de casas hogar</strong>, con el objetivo de perfilar a cada uno hacia un futuro seguro e independiente.
      <br />
      Nuestra misión es <strong>transformar vidas a través de programas personalizados</strong> que empoderan a los jóvenes con las herramientas, habilidades y conocimientos necesarios para prosperar en el ámbito.
    </>

  )

  return (

    <TextImageTamplate
      title={title}
      imageSrc="/images/about.webp"
      imageAlt="Foto de niños jugando al decorar"
      text={text}
    />
  )
}
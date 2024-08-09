import TextImageTamplate from '@/sections/templates/TextImageTamplate'

export default function Importance({ }) {

  const title = (
    <>
      Importancia
    </>
  )

  const text = (
    <>
      Sabemos que la transición hacia una vida independiente y productiva puede ser especialmente desafiante para estos jóvenes, y <strong>Fututalent</strong> juega un papel vital en facilitar este proceso. Los jóvenes egresados de casas hogar suelen enfrentarse a barreras significativas para acceder a oportunidades educativas y laborales. <strong>Fututalent</strong> trabaja para nivelar el campo de juego, proporcionando las herramientas y el apoyo necesarios para que estos jóvenes puedan competir en igualdad de condiciones con sus pares.
    </>
  )

  return (

    <TextImageTamplate
      title={title}
      imageSrc="/images/importance-graph.webp"
      imageAlt="Grafica de población economicamente activa"
      text={text}
    />
  )
}
import Title from '@/components/Title'
import Image from 'next/image'


export default function About({ }) {
  return (
    <section 
      className={`
        about
        container
        mx-auto
        my-28

        px-4
        flex
        flex-col md:flex-row-reverse
        items-center
        justify-center
        gap-6
      `}
    >
      <div 
        className={`
          text
          w-full md:w-1/2
        `}
      >
        <Title>
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
        </Title>

        <p
          className={`
            text-center md:text-left
            my-8
          `}
        >
          En <strong>Fututalent</strong>, creemos en el poder del potencial
          humano y en la capacidad de cada individuo para
          alcanzar un <strong>futuro brillante y lleno de oportunidades</strong>.
          <br />
          Somos una organización dedicada al <strong>desarrollo de
          planes de vida y carrera para niños y jóvenes
          egresados de casas hogar</strong>, con el objetivo de perfilar
          a cada uno hacia un futuro seguro e independiente.
          <br />
          Nuestra misión es <strong>transformar vidas a través de
          programas personalizados</strong> que empoderan a los
          jóvenes con las herramientas, habilidades y
          conocimientos necesarios para prosperar en el
          ámbito
        </p>
      </div>

      <Image
          src="/images/about.webp"
          alt="Niños jugando al doctor"
          width={1000}
          height={800}
          className={`
            mx-auto
            mb-4
            w-full md:w-1/2
            opacity-90
          `}
        />
    </section>
  )
}
import TextImageTamplate from '@/sections/templates/TextImageTamplate'

export default function Founder({ }) {

  const title = (
    <>
      Detrás de...
    </>
  )

  const text = (
    <>
      <span
        className={`
          text-2xl
        `}
      >
        <strong>Karen Montes</strong>, fundadora de <strong>Fututalent</strong>, es licenciada en Administración y cuenta con un diplomado en la creación, desarrollo y dirección de empresas sociales. Con una profunda pasión por trabajar con niños y jóvenes, Karen se dedica a promover el desarrollo integral de los futuros talentos.
      </span>
    </>
  )
  
  return (

    <TextImageTamplate
      title={title}
      imageSrc="/images/founder.webp"
      imageAlt="Foto de Karen Montes"
      text={text}
      reverse={true}
    />
  )
}
import TextGalleryTemplate from '@/sections/templates/TextGalleryTemplate'


export default function CareModel() {
  return (
    <TextGalleryTemplate
      id="linkage"
      imagesNum={5}
      imagesPrefix='care'
      title="Modelo de atención"
      texts={[
        "Nos centramos en brindar el apoyo y las herramientas necesarias a los residentes de casas hogar para que construyan un futuro seguro e independiente durante su transición hacia la vida adulta, desde la orientación vocacional hasta la capacitación en habilidades técnicas y blandas, nos aseguramos de que cada joven reciba una formación personalizada que responda a sus intereses y capacidades.",
        "En Fututalent, no solo preparamos a los jóvenes para el trabajo, sino que los empoderamos para que tomen control de su futuro y se conviertan en agentes de cambio en sus comunidades.",
      ]}
    />
  )
}
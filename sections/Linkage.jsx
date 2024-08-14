import TextGalleryTemplate from '@/sections/templates/TextGalleryTemplate'

export default function Linkage() {
  return (
    <TextGalleryTemplate 
      id="linkage"
      imagesNum={3}
      imagesPrefix='linkage'
      title="Vinculación"
      texts={[
        "En nuestro espíritu organizacional está el sembrar las semillas de productividad y crecimiento profesional en las nuevas generaciones, conectando a jóvenes de casas hogar con empresas, emprendedores y profesionistas para perfilar el futuro que ellos desean desde edades tempranas. A través de estas conexiones, los jóvenes obtienen una visión más clara de sus metas e inician su plan de vida independiente, al mismo tiempo que adquieren habilidades prácticas.",
        "Al contactar con empresas les ofrecemos una ventana al mundo profesional, así mismo, contar con aliados profesionistas significa que nuestros jóvenes pueden conocer de primera mano las realidades y satisfacciones de distintas profesiones para encontrar su propia vocación, mientras que, por medio del emprendimiento les mostramos cómo transformar su creatividad en oportunidades reales que ellos mismos pueden capitalizar.",
        "Sea cual sea su decisión, nosotros estamos aquí para apoyarlos.",
        "Prepararse para un futuro lleno de posibilidades es el impulso que necesitan para seguir adelante en su formación y estar lo mejor preparados posible al momento de egresar de la institución de cuidado temporal. Sé parte de este cambio, e inspira a la próxima generación de talentos.",
      ]}
    />
  )
}
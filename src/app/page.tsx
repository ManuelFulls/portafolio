import Image from 'next/image'
import styles from './page.module.css'
import Principal from '@/sections/principal'
import Aboutme from '@/sections/about-me'
import Experience from '@/sections/experience'
import Projects from '@/sections/projects-card'
import Footer from '@/sections/footer'

export default function Home() {
  return (
    <>
      <Principal />
      <Aboutme
        descripcion='Desarrollador Web por pasión, actualmente soy un estudiante universitario que se ha decidido a emprender el camino del desarrollo web, comenzando por el front-end y creando proyectos para poner en práctica las tecnologías y lenguajes que estoy aprendiendo.'
        url='/MANUELFULLS.jpeg'
      />
      <Experience
        experiencia1='Ruta de Aprendizaje'
        informacion1=' De las tecnologías que se presentan han sido con las que he creado
          algunos proyecto, como una pagina web para una mini-abarrotes.'
        informacion2='Al igual que la creación de pequeños proyectos desarrollados en React.'
        informacion3='Con el objetivo de crear proyectos grandes e intuitivos.'
      />
      <div id='projects-card' className='box-projects'>
        <h3 className='project'>Proyectos realizados</h3>
        <Projects
          url='/MAXGOL.gif'
          titulo='Página Web de Mini-Abarrotes'
          descripcion1='Este trabajo representa una reconstrucción de una página previamente desarrollada en la preparatoria, con el objetivo de adquirir conocimientos fundamentales sobre React. Mi enfoque se centra en el aprendizaje continuo de esta tecnología, impulsado por la creación de diversos proyectos que me permitan explorar y profundizar en sus capacidades.'
          enlace1='https://maxgol-react.vercel.app/'
          enlace2='https://github.com/ManuelFulls/maxgol-react'
        />
        <Projects
          url='/APLICACION-CLIMA.gif'
          titulo='Aplicación de Clima'
          descripcion1='Aplicación sencilla sobre el clima, donde se puede ver información
          acerca del estado climatologico. Este proyecto, desarrollado utilizando la biblioteca React de JavaScript, fue concebido con el objetivo principal de adquirir competencias fundamentales en esta herramienta.'
          enlace1='https://aplicacion-clima-basica.netlify.app/'
          enlace2='https://github.com/ManuelFulls/Aplicaci-n-clima'
        />
      </div>
      <Footer />
    </>
  )
}

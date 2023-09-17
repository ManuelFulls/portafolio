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
        descripcion='Desarrollador Web por pasion, actualmente soy un estudiante
          universitario que se ha decidido, emprender el camino del desarrollo
          web empezando por medio del front-end creando proyectos para poner en
          práctica las tecnologias y lenguajes que estoy aprendiendo.'
        url='https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254'
      />
      <Experience
        experiencia1='Cualquier cosa es experiencia'
        informacion1=' De las tecnologías que se presentan han sido con las que he creado
          algunos proyecto, como una pagina web para una mini-abarrotes.'
        informacion2='En la universidad se han creado pequeños proyectos a consola, con el
          fin de obtener lógica de programacion he ir aprendiendo las bases de
          la programación por medio del lenguaje de Java.'
        informacion3='  Las bases que tengo de Java son más solidas a comparación de las otras
          tecnologias que se encuentran en este apartado.'
      />
      <div id='projects-card' className='box-projects'>
        <h3 className='project'>Proyectos realizados</h3>
        <Projects
          url='/3949100.png'
          titulo='Página Web de una Mini-Abarrotes'
          descripcion1='  En este proyecto se usaron las tecnologias HTML y CSS para su
        desarrollo, con el fin de mostrar los productos ofrecidos y poder
        notar cuando algunos productos estan en oferta. Su desarrollo es de
        una pagina estática, sin ningún tipo de interacción con el usuario.'
          descripcion2=' Es una página que volvi a construir para ir aprendiendo las bases de
        React y seguir creando más proyectos para aprender esta tecnologia.'
        />
        <Projects
          url='https://w1.pngwing.com/pngs/82/524/png-transparent-golden-state-warriors-logo-cleveland-cavaliers-2018-nba-finals-basketball-stephen-curry-klay-thompson-draymond-green-yellow.png'
          titulo='Página Web de una Mini-Abarrotes'
          descripcion1='  En este proyecto se usaron las tecnologias HTML y CSS para su
        desarrollo, con el fin de mostrar los productos ofrecidos y poder
        notar cuando algunos productos estan en oferta. Su desarrollo es de
        una pagina estática, sin ningún tipo de interacción con el usuario.'
          descripcion2=' Es una página que volvi a construir para ir aprendiendo las bases de
        React y seguir creando más proyectos para aprender esta tecnologia.'
        />
        <Projects
          url='https://w1.pngwing.com/pngs/82/524/png-transparent-golden-state-warriors-logo-cleveland-cavaliers-2018-nba-finals-basketball-stephen-curry-klay-thompson-draymond-green-yellow.png'
          titulo='Página Web de una Mini-Abarrotes'
          descripcion1='  En este proyecto se usaron las tecnologias HTML y CSS para su
        desarrollo, con el fin de mostrar los productos ofrecidos y poder
        notar cuando algunos productos estan en oferta. Su desarrollo es de
        una pagina estática, sin ningún tipo de interacción con el usuario.'
          descripcion2=' Es una página que volvi a construir para ir aprendiendo las bases de
        React y seguir creando más proyectos para aprender esta tecnologia.'
        />
      </div>
      <Footer />
    </>
  )
}

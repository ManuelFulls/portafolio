import Styles from './experience.module.css'
import Social from '@/components/social-link'
import { CssLogo, HtmlLogo, InstagramLogo, JavaLogo, ReactLogo } from '@/icons'

interface Props {
  experiencia1: string
  informacion1: string
  informacion2: string
  informacion3: string
}

const Experience = (props: Props) => {
  const { experiencia1, informacion1, informacion2, informacion3 } = props

  return (
    <section id='experience' className={Styles.seccion2}>
      <div className={Styles.contenedor1}>
        <h2 className={Styles.experiencia1}>{experiencia1}</h2>
        <p className={Styles.informacion1}>{informacion1}</p>
        <p className={Styles.informacion2}>{informacion2}</p>
        <p className={Styles.informacion3}>{informacion3}</p>
      </div>
      <div className={Styles.contenedor2}>
        <h2 className={Styles.experiencia2}>Experiencia</h2>
        <div className={Styles.cajaicono}>
          <h3 className={Styles.icono1}>
            <Social url='#' title='Html' icon={HtmlLogo} />
          </h3>
          <h3 className={Styles.icono1}>
            <Social url='#' title='CSS3' icon={CssLogo} />
          </h3>
          <h3 className={Styles.icono1}>
            <Social url='#' title='React' icon={ReactLogo} />
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Experience

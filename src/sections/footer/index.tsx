import Styles from '../footer/footer.module.css'
import Navbar from '@/components/navbar'
import Social from '@/components/social-link'
import { GithubLogo, GmailLogo, InstagramLogo } from '@/icons'

const Footer = () => {
  return (
    <section className={Styles.seccion4}>
      <Navbar />
      <div className={Styles.iconos}>
        <Social url='#' title='Jesus50056' icon={InstagramLogo} />
        <Social
          url='https://github.com/ManuelFulls'
          title='ManuelFulls'
          icon={GithubLogo}
        />
        <Social url='#' title='jesusmanueldediosvelazquez' icon={GmailLogo} />
      </div>
      <h3 className={Styles.nombre}>JESUSMDDV/JESUS MANUEL</h3>
    </section>
  )
}

export default Footer

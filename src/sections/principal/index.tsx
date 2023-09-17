import Social from '@/components/social-link'
import styles from './principal.module.css'
import { GithubLogo, GmailLogo, InstagramLogo } from '@/icons'

const Principal = () => {
  return (
    <main className={styles.principal}>
      <h1 className={styles.titulo}>Jesus Manuel</h1>
      <h3 className={styles.subtitulo}>
        Programador Web y estudiante de Ingenieria en Sistemas
      </h3>
      <Social url='#' title='Jesus50056' icon={InstagramLogo} />
      <Social
        url='https://github.com/ManuelFulls'
        title='ManuelFulls'
        icon={GithubLogo}
      />
      <Social url='#' title='jesusmanueldediosvelazquez' icon={GmailLogo} />
    </main>
  )
}

export default Principal

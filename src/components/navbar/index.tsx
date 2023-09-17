import Navlink from '../navlink'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Navlink url='#about-me' title='Sobre mi' />
      <Navlink url='#experience' title='Experiencia' />
      <Navlink url='#projects-card' title='Proyectos' />
    </nav>
  )
}

export default Navbar

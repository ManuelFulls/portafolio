import styles from './about-me.module.css'

interface Props {
  url: string
  descripcion: string
}

const Aboutme = (props: Props) => {
  const { url, descripcion } = props
  return (
    <section id='about-me' className={styles.seccion1}>
      <div className={styles.contenedor2}>
        <img className={styles.imagen} src={url} alt='IMAGEN' />
      </div>
      <div className={styles.prueba}>
        <h2 className={styles.informacion}>Sobre mi</h2>
        <p className={styles.descripcion}>{descripcion}</p>
      </div>
    </section>
  )
}

export default Aboutme

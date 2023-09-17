import Styles from './projects.module.css'

interface Props {
  url: string
  titulo: string
  descripcion1: string
  descripcion2: string
}

const Projects = (props: Props) => {
  const { url, titulo, descripcion1, descripcion2 } = props

  return (
    <section className={Styles.proyectos}>
      <div className={Styles.seccion3}>
        <div className={Styles.contenedor1}>
          <img className={Styles.imagen} src={url} alt='Warriors' />
          <div className={Styles.cajaimagen}></div>
        </div>
        <div className={Styles.contenedor2}>
          <h2 className={Styles.titulo}>{titulo}</h2>
          <p className={Styles.descripcion1}>{descripcion1}</p>
          <p className={Styles.descripcion2}>{descripcion2}</p>
          <div className={Styles.enlaces}>
            <div>
              <a className={Styles.enlace1} href='#'>
                Web
              </a>
            </div>
            <div>
              <a className={Styles.enlace2} href='#'>
                Repositorio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

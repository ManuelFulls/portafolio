import Styles from './projects.module.css'

interface Props {
  url: string
  titulo: string
  descripcion1: string
  enlace1: string
  enlace2: string
}

const Projects = (props: Props) => {
  const { url, titulo, descripcion1, enlace1, enlace2 } = props

  return (
    <section className={Styles.proyectos}>
      <div className={Styles.seccion3}>
        <div className={Styles.contenedor1}>
          <img className={Styles.imagen} src={url} alt='Warriors' />
        </div>
        <div className={Styles.contenedor2}>
          <h2 className={Styles.titulo}>{titulo}</h2>
          <p className={Styles.descripcion1}>{descripcion1}</p>

          <div className={Styles.enlaces}>
            <div>
              <a className={Styles.enlace1} href={enlace1} target='blanck'>
                Web
              </a>
            </div>
            <div>
              <a className={Styles.enlace2} href={enlace2} target='blanck'>
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

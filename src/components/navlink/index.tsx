import Styles from './navlink.module.css'
import Link from 'next/link'

interface Props {
  url: string
  title: string
}

const Navlink = ({ url, title }: Props) => {
  return (
    <Link className={Styles.links} href={url} title={title}>
      {title}
    </Link>
  )
}

export default Navlink

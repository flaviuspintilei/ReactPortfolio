import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-f.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'


const Sidebar = () => (
  <div className = 'nav-bar'>
    <Link className = 'logo' to = '/'>
      <img src={LogoS} alt = "logo"></img>
      {/* <img src={LogoSubtitle} alt = "flavius"></img> */}
    </Link>
  </div>
)

export default Sidebar
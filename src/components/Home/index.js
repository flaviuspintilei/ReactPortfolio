import { Link } from 'react-router-dom'
import './index.scss';


const Home = () => {


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'm Flavius</h1>
        <h2>QA Tester / JavaScript Beginner</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  )

}

export default Home
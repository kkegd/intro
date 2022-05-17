import logoImage from './images/gdApple1.png'
import cloud2 from './images/cloud1.png'
import cloud1 from './images/cloud2.png'
import './App.css'
import './index.css'

const Logo: React.FC = () => {
  return (
    <>
        <div className='sky'>
          <img src={cloud1} alt='?¿½_'></img>
          <img src={cloud2} alt='?¿½_'></img>
        </div>
        <img src={logoImage} alt='?¿½?¿½?¿½?¿½?¿½?¿½?¿½Ì??¿½?¿½S' className='logo'></img>
    </>
  )
}

export default Logo
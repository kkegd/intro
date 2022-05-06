import logoImage from './images/gdApple1.png'

import Menu from './components/Menu'
import MyName from './components/MyName'

import cloud2 from './images/cloud1.png'
import cloud1 from './images/cloud2.png'
import './App.css'
import './index.css'

const App: React.FC = () => {
  return (
    <>
      <div className='top'>
        <div className='sky'>
          <img src={cloud1} alt='‰_'></img>
          <img src={cloud2} alt='‰_'></img>
        </div>
        <img src={logoImage} alt='‰ù‚©‚µ‚ÌƒƒS' className='logo'></img>
        <MyName />
        <Menu />
      </div>
    </>
  )
}

export default App
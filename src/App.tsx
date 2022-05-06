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
          <img src={cloud1} alt='雲'></img>
          <img src={cloud2} alt='雲'></img>
        </div>
        <img src={logoImage} alt='懐かしのロゴ' className='logo'></img>
        <MyName />
        <Menu />
      </div>
    </>
  )
}

export default App
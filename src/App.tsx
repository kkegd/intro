import Menu from './components/Menu'
import MyName from './components/MyName'
import './App.css'
import './index.css'
import Logo from './logo'

const App: React.FC = () => {
  return (
    <>
      <div className='top'>
        <Logo />
        <MyName />
        <Menu />
      </div>
    </>
  )
}

export default App
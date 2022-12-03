import { Routes, Route } from 'react-router-dom'
import { mainLayout } from './components/MainLayout/mainLayout'
import {Home} from './components/Home/Home'

function App() {

 const HomePage = mainLayout(Home)

  return (
    <Routes>
       <Route path="/" element={<HomePage/>} />
    </Routes>
  )
}

export default App;

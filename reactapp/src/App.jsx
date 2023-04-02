import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home/Home'
import Personagens from './componentes/pages/Personagens/Personagens'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/Home' element={ <Home/>}/>
        <Route path='/Personagens' element={ <Personagens />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

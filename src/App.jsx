import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/contato" element={<Contatos/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App

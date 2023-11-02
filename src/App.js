import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Autores } from './components/Autores';
import { Libros } from './components/Libros';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <div className='back'>
      <BrowserRouter> 
         <NavBar />
         <Routes>
          <Route path='/' element ={ <Login/>}/>
          <Route path='/home' element ={ <Home/>}/>
          <Route path='/autores' element= {<Autores/>}/>
          <Route path='/libros' element= {<Libros />}/>
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Main from './pages/Main';




function App() {


  return (
    <>
      
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;

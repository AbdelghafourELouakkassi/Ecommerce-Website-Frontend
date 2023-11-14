import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { Routes,Route } from 'react-router-dom';
import NavbarUi from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Success from './components/Success';
import Cancel from './components/Cancel';

function App(){
  
  return(
      <>
          <NavbarUi />   
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Contact' element={<ContactUs/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Success' element={<Success/>}/>
              <Route path='/Cancel' element={<Cancel/>}/>
              <Route path='*' element={<h1 style={{textAlign:'center',margin:'100px 0'}}>Page Not Found</h1>}/>
            </Routes>
          <Footer/> 
      </>
  );
}

export default App;

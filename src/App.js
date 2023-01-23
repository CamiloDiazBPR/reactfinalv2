import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './Context/CartContext';
import Artist from './routes/Artist/Artist';
import ArtistId from './routes/ArtistId/ArtistId';
import Contact from './routes/Contact/Contact';
import Digital from './routes/Digital/Digital';
import DigitalID from './routes/DigitalID/DigitalID';
import Checkout from './routes/Checkout/Checkout';
import Finish from './routes/Finish/Finish';
import Home from './routes/Home/Home';
import Vinyl from './routes/Vinyl/Vinyl';



function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    

    <NavBar />
    

    <Routes>

      <Route exact path="/" element={<Home />}/>
      <Route exact path="/artist" element={<Artist />}/>
      <Route exact path="/artist/:id" element={<ArtistId />}/>
      <Route exact path="/digital" element={<Digital />}/>
      <Route exact path="/digital/:id" element={<DigitalID />}/>
      <Route exact path="/vinyl" element={<Vinyl />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/checkout" element={<Checkout />}/>  
      <Route exact path="/finish" element={<Finish />}/> 
    
    </Routes>

       
    
    
    </BrowserRouter>

    </CartProvider>


  );
}

export default App;

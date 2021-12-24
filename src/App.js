import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css'
import Cart from './components/Cart'
import CartContextProvider  from './Context/CartContext'





function App() {

 
  return (
  <CartContextProvider>
      <BrowserRouter>
        <div className="App">
            <NavBar/>
              <Routes>
                <Route exact path="/" element={<ItemListContainer/>} />
                <Route exact path="/categoria/:idCate" element={<ItemListContainer/>}/>
                <Route exact path="/detalle/:id" element={<ItemDetailContainer/>}/> 
                <Route exact path="/cart" element={<Cart/>} />
            </Routes>
        
        </div>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;

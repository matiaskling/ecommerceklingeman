import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css'
import { CartWidget } from './components/CartWidget';





function App() {

 
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>} />
              <Route exact path="/categoria/:idCate" element={<ItemListContainer/>}/>
              <Route exact path="/detalle/:id" element={<ItemDetailContainer/>}/> 
              <Route exact path="/cart" element={<CartWidget/>} />
          </Routes>
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;

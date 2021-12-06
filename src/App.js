import ItemCount from './components/ItemCount';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {

 const initial = 1;
 const products = 20;
 

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <ItemCount initial={initial} products={products} onAdd/>
    </div>
  );
}

export default App;

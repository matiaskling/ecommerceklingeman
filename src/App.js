import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = 'Soy el ItemListContainer.js'/>
    </div>
  );
}

export default App;

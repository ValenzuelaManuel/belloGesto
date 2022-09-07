import './App.css';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Promesa from './components/Promesa';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      {/* <Promesa/> */}
    </div>
  );
}

export default App;

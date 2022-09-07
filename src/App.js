import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

export default function App({props}) {
  const productos = ["Aros", "Anillo", "Collar"]
  return (
    <div>
      <NavBar/>
      <h1>PropProp</h1>
      <span>{props}</span>
      <ItemListContainer items={productos}/>
    </div>
  );
}


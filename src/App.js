import logo from './logo.svg';
import NavBar from "./components/NavBar";
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainerGreeting from './components/ItemListContainer/ItemListContainerGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>  
      </header>
      <ItemListContainer> </ItemListContainer> 
    </div>
  );
}

export default App;

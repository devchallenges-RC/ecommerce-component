import './App.css';
import { Menu } from './panel/Menu';
import { Cart } from './panel/Cart';

function App() {
  return (
    <div className="App wrapper menu">
      <Menu />
      <Cart />
    </div>
  );
}

export default App;

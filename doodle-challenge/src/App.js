import './app.scss';
// import Sample from './Component/sample';
import ProductList from "./Components/listProduct";
import Cart from "./Components/cart/Cart"

function App() {
  return (
    <div className="App">
      <div className="App__split __left">
        <ProductList  />
      </div>
      <div className="App__split __right">
        <Cart />
        </div>
        
    </div>
  );
}

export default App;

import Banner from "./Banner";
import logo from "../assets/leaf+1.png";
import Footer from "./Footer";
// import Cart from './Cart'
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      {/* <Cart /> */}
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;

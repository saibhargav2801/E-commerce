import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import Cart from "./components/Cart/Cart";
import { context } from "./CartContext";
import Checkout from "./components/Checkout/Checkout/Checkout";
function App() {
  const [isClicked, updateIsclicked] = useState(false);
  const [isChecked, updateChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  //fetch all the products from the API
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  //fetch the cart to which we can add items
  const fetchCart = async () => {
    const info = await commerce.cart.retrieve();
    setCart(info);
  };
  //We need to add items to cart
  const handleAdditems = async (prodcutid, quantity) => {
    const item = await commerce.cart.add(prodcutid, quantity);
    setCart(item.cart);
  };
  //update cart when quantity is added or removed//
  const handleUpdateCartQty = async (prodcutid, quantity) => {
    const response = await commerce.cart.update(prodcutid, { quantity });
    setCart(response.cart);
  };
  //Handle remove from cart//
  const handleRemoveFromCart = async (productid) => {
    const response = await commerce.cart.remove(productid);
    setCart(response.cart);
  };
  //Empty the cart
  console.log(cart);
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div>
      <context.Provider
        value={{
          isClicked,
          updateIsclicked,
          isChecked,
          updateChecked,
          setCart,
          handleEmptyCart,
        }}
      >
        <Navbar totalItems={cart.total_items} />
        {isClicked & !isChecked && (
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleEmptyCart={handleEmptyCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        )}
        {!isClicked & !isChecked && (
          <Products products={products} onAddtoCart={handleAdditems} />
        )}
      </context.Provider>
      {isChecked && <Checkout cart={cart} handleEmptyCart={handleEmptyCart} />}
    </div>
  );
}

export default App;

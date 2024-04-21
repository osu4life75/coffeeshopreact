import React, { useEffect, useState } from 'react';
import './App.css';
// import Menu from './components/Menu'; // Import your Menu component
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [shoppingCart,setShoppingCart] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    let mockMenuItems = [
      { id: 1, item: "Black Coffee", price: 1, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_black_coffee.jpeg?raw=true' },
      { id: 2, item: "Espresso", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_espresso1.jpeg?raw=true' },
      { id: 3, item: "Cappuccino", price: 3, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_cappuccino.jpeg?raw=true' },
      { id: 4, item: "Latte", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_latte.jpeg?raw=true' },
      { id: 5, item: "Mocha", price: 4, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_mocha.jpeg?raw=true' },
      { id: 6, item: "Americano", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_americano.jpeg?raw=true' }
    ];

    setMenuItems(mockMenuItems);

    //   await fetch("/.netlify/functions/getData")
    //     .then(function (response) {
    //       console.log('response', response)
    //       if (response.ok) {
    //         return response.json();
    //       }
    //       throw new Error("Network response was not ok.");
    //     })
    //     .then(function (data) {
    //       console.log('data', data)
    //       setMenuItems(data)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       alert("Function Failed");
    //     });

  }, []);

  const updateShoppingCart = (shoppingCartItem) =>{
      console.log('got shopping cart', shoppingCartItem);
      setShoppingCart(shoppingCartItem);

  }

  return (
    
    <div className="App">
      <Navbar shoppingCart={shoppingCart}/>
      {/* <Menu menuItems={menuItems} /> Pass menuItems as props to Menu component */}
      <Body updateShoppingCart={(e) => updateShoppingCart(e) } menuItems={menuItems} /> {/* Pass menuItems as props to Body component */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

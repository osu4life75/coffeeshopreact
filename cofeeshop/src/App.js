import React, { useEffect, useState } from 'react';
import './App.css';
// import Menu from './components/Menu'; // Import your Menu component
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    let mockMenuItems = [
      { id: 1, name: "Black Coffee", price: 1, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/91eab42ce8b3e70d37eb149bc97ff20d71f0f9e1/black_coffee.jpeg?raw=true' },
      { id: 2, name: "Espresso", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/espresso1.jpeg?raw=true' },
      { id: 3, name: "Cappuccino", price: 3, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/cappuccino.jpeg?raw=true' },
      { id: 4, name: "Latte", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/latte.jpeg?raw=true' },
      { id: 5, name: "Mocha", price: 4, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/mocha.jpeg?raw=true' },
      { id: 6, name: "Americano", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/americano.jpeg?raw=true' }
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

  return (
    <div className="App">
      <Navbar/>
      {/* <Menu menuItems={menuItems} /> Pass menuItems as props to Menu component */}
      <Body menuItems={menuItems} /> {/* Pass menuItems as props to Body component */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

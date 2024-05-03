import React, { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [merchandiseItems, setMerchandiseItems] = useState([]);
  const [likedCoffee, setLikedCoffee] = useState([]);
  const [weather, setWeather] = useState(null); // State for weather information

  useEffect(() => {
    // Simulating fetching data from an API
    let mockMenuItems = [
      { id: 1, item: "Black Coffee", price: 1, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/intro-1641943654.jpg?raw=true'},
      { id: 2, item: "Espresso", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_espresso1.jpeg?raw=true' },
      { id: 3, item: "Cappuccino", price: 3, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_cappuccino.jpeg?raw=true' },
      { id: 4, item: "Latte", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_latte.jpeg?raw=true' },
      { id: 5, item: "Mocha", price: 4, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_mocha.jpeg?raw=true' },
      { id: 6, item: "Americano", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_americano.jpeg?raw=true' }
    ];

    setMenuItems(mockMenuItems);
    setLikedCoffee([1,2,5,6]);

    // Fetch weather data
    fetchWeather();
  }, []);

  useEffect(() => {
    // Simulating fetching data from an API
    let mockMerchandiseItems = [
      { id: 1, item: "Black Coffee 160z Bag", price: 8, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/bagofcoffe.jpeg?raw=true' },
      { id: 2, item: "Stanley Cup", price: 28, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/Vip-Dropping-Shipping-Stanley-Stainless-Steel-Vacuum-Insulated-Tumbler-with-Lid-and-Straw-40oz-Thermal-Travel.webp?raw=true' },
      { id: 3, item: "Ceramic Cup", price: 6, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/PavoRealPeacockMug_CR-17P_web_1_1500x.webp?raw=true' },
      { id: 4, item: "Logo Hat", price: 12, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/OCW-OAKTruckerHat-01.webp?raw=true' },
      { id: 5, item: "Logo Tshirt", price: 19, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/coffeeshirt.jpeg?raw=true' },
      { id: 6, item: "Coffee Calendar", price: 3, image: 'https://github.com/osu4life75/coffeShopImages/blob/main/75_750x750_Front_Color-NA.jpg?raw=true' }
    ];

    setMerchandiseItems(mockMerchandiseItems);
  }, []);

  const updateShoppingCart = (shoppingCartItem) => {
    setShoppingCart([...shoppingCart, shoppingCartItem]);
  };

  const addFavoriteHeart = (likedCoffeeID) => {
    if (likedCoffee.includes(likedCoffeeID)) {
      let temp = [...likedCoffee];
      let index = temp.indexOf(likedCoffeeID);
      temp.splice(index,1);
      setLikedCoffee(temp);
    } else {
      setLikedCoffee([...likedCoffee, likedCoffeeID]);
    }
  };

  // Function to fetch weather data
  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Oklahoma-City&appid=0ffc358a5008bde04e2844edc7226100&units=metric`);
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        throw new Error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <Navbar shoppingCart={shoppingCart} />
      <Body updateShoppingCart={updateShoppingCart} menuItems={menuItems} merchandiseItems={merchandiseItems} addFavoriteHeart={addFavoriteHeart} likedCoffee={likedCoffee}/>
      <Contact />
      <Footer weather={weather} /> {/* Pass weather data to Footer component */}
    </div>
  );
}

export default App;

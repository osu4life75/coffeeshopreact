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
  const [recommendedCoffee, setRecommendedCoffee] = useState('');

  useEffect(() => {
    getData();
    setLikedCoffee([1,2,5,6]);
    fetchWeather();
    
    
    
   
  },[]);
    const getData = async () => {
      const response = await fetch("/api/getData")
      try {
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        console.log('response', response)
        const jsonData = await response.json();
        setMenuItems(jsonData.menuItems);
        setMerchandiseItems(jsonData.merchItems);
        console.log('jsonData', jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    
  
  

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
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Oklahoma%20City&appid=0ffc358a5008bde04e2844edc7226100&units=metric`);
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
        suggestCoffee(data);
      } else {
        throw new Error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Function to suggest the best coffee drink based on weather
  const suggestCoffee = (weatherData) => {
    // Analyze weather data and suggest coffee drink
    if (weatherData) {
      const weatherCondition = weatherData.weather[0].main;
      if (weatherCondition === 'Clear') {
        setRecommendedCoffee('Espresso'); // For clear weather, suggest Espresso
      } else if (weatherCondition === 'Clouds') {
        setRecommendedCoffee('Latte'); // For cloudy weather, suggest Latte
      } else {
        setRecommendedCoffee('Black Coffee'); // For other weather conditions, suggest Black Coffee
      }
    }
  };

  return (
    <div className="App">
      <Navbar shoppingCart={shoppingCart} />
      <Body 
        updateShoppingCart={updateShoppingCart} 
        menuItems={menuItems} 
        merchandiseItems={merchandiseItems} 
        addFavoriteHeart={addFavoriteHeart} 
        likedCoffee={likedCoffee}
        recommendedCoffee={recommendedCoffee} // Pass recommendedCoffee
      />
      <Contact />
      <Footer weather={weather} /> {/* Pass weather data to Footer component */}
    </div>
  );
}

export default App;

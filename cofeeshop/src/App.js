import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

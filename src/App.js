
import './App.css';

import NavBar from './Components/NavBar';
import { Switch,Route } from 'react-router-dom';

import Home from './Components/Home';

import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Store from './Components/Store';
import Classes from './Components/Classes';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" render={() =>(
            <Home/> 
        )}/>
        <Route exact path="/about" render={() =>(
            <AboutUs/> 
        )}/>
        <Route exact path="/services" render={() =>(
            <Services/>
        )}/>
        <Route exact path="/store" render={() =>(
            <Store/>
        )}/>
        <Route exact path="/blog" render={() =>(
                <Blog/>
        )}/>
        <Route exact path="/classes" render={() =>(
                <Classes/> 
        )}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { useState , useEffect} from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import SearchPage from "./Pages/SearchPage/SearchPage";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import Slider from "./Pages/Slider/Slider";
import InputSearch from "./Pages/Landing/MainPage/InputSearch";
import Head from "./Pages/Landing/Header/Header";
//import Place from "./Pages/SearchPage/Places/GooglePlace"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
 const [lat , setlat] = useState([]);
 const [lng , setlng] = useState([]);
 useEffect(()=>{console.log("+++++++"+lat);
              console.log("+++++++"+lng)                
},[lng]);

  return (
    <div className="app">
   
      <Router>
           
        <Switch>
          <Route exact path="/">
            <Head/>
            <InputSearch
             lat = {(e) =>setlat(e)}
             lng = {(e) =>setlng(e)}
             />
          </Route>

          <Route exact path="/Home">
            <Header />
            <Slider/>
            <Body
             lat={lat}
             lng={lng}
            />
          </Route>

          <Route exact path="/search">
             <Header />
            < SearchPage
             lat={lat}
             lng={lng}            
            />
          </Route>

          <Route exact path="/restaurant">
            <Header />
            <RestaurantDetails />
          </Route>
         
           <Route exact path="/search">
             <Header />
         
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

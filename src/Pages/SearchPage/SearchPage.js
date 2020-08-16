import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import { GoogleComponent } from 'react-google-location'
import SearchIcon from "@material-ui/icons/Search";
import RestaurantItems from "./../RestaurantItems/RestaurantItems";
import css from "./css.module.css"
const API_KEY = "";

//          locationBoxStyle={'custom-style'}
//          locationListStyle={'custom-style-list'}

function SearchPage() {
  const [place , setplace] = useState({});
  const [show , setshow] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [searchedRestaurantArray, setSearchedRestaurantArray] = useState([]);
  console.log("🍕🍕", searchedRestaurantArray);
  const [lat_long, setLat_Long] = useState({});
  console.log("🍄🍄", lat_long);



  const handleSubmit = async () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("user-key", "0bdb56635f92b3041fec1b29008f466a");
    let options = {
      method: "GET",
      headers: headers,
    };

    let url = `https://developers.zomato.com/api/v2.1/search?entity_type=landmark&q=${inputSearch}&start=0&count=20&lat=${place.coordinates.lat}&lon=${place.coordinates.lng}`;
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setSearchedRestaurantArray(data.restaurants);
      });
  };

  let randomImageNames = [
    "cuisine",
    "dishes",
    "food",
    "delicious",
    "restaurant",
    "gourmet",
    "foodies",
    "meat",
    "bread",
    "fruit",
    "pizza",
    "burguer",
    "juice",
    "coke",
    "salad",
    "snack",
    "drink",
    "coffee",
    "cheese",
    "tea",
  ];
  let randomImage;
 function cor(){
      console.log(place.coordinates);
      setshow(false);
 }

  return (
    <div>{show?(
    <div  className= "googleplace">
        <img 
                src = "https://image.freepik.com/free-photo/view-decoration-with-delicious-food-copy-space_23-2148308898.jpg"
                className={css.background}
            />
       <div>
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:in'}
          coordinates={true}
          placeholder={'Start typing location'}
          onChange={(e) => { 
          setplace(e)
           if(place.coordinates){
            cor(); 
           }} }/>
         
      </div>
    </div>)
    :(<div className="searchpage">
      <div className="searchpage__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <SearchIcon className="searchpage__icon" onClick={handleSubmit} />
      </div>
      <hr />
      <div className="searchpage__body">
        {searchedRestaurantArray
          ? searchedRestaurantArray.map((listofsearch) => {
              randomImage =
                randomImageNames[Math.floor(Math.random() * (20 - 0) + 0)];
              return (
                <RestaurantItems
                  image={`https://source.unsplash.com/500x300/?${randomImage}`}
                  key={listofsearch.restaurant.R.res_id}
                  data={listofsearch.restaurant}
                />
              );
            })
          : "no results"}
      </div>
    </div>)}

    </div>
  );
}

export default SearchPage;

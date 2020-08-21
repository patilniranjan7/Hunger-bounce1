import React from "react";
import image from "./image.jpg";
import css from "./InputSearch.module.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import GoogleComponent from "../GooglePlaces/GoogleComponent";
//import { GoogleComponent } from 'react-google-location'
const API_KEY = "AIzaSyDo6TAihyVcLfi24e3Jym11WQR0Iv6CvEU";

function InputSearch(props) {
 let history = useHistory();
 const [place , setplace] = useState({});
  function cor(e){
      if(e.coordinates){
          props.lat(e.coordinates.lat);
          props.lng(e.coordinates.lng);
          console.log(e.coordinates.lng);
         history.push('/Home');
           }
      // 
       // 
  }
  return (
    <div className={css.inputSearch}>
      {/* <img src={image} className="background" /> */}
      <div className={css.contents}>
        <h2 className={css.title}>Hunger Bounce🍴</h2>
        <h3 className={css.tagline}>Let Deliciousness twril in </h3>
        <h3 className={css.taglin}>your mouth🌮</h3>
       <div className = {css.googleplace}>
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:in'}
          coordinates={true}
          placeholder={'Start typing location'}
          onChange={(e) => { 
          setplace(e)
          cor(e);

          } }/>
         
      </div>
      </div>
      <img src={image} className={css.background} />
    </div>
  );
}

export default InputSearch;

 
import css from "./css.module.css"

import React, { useState } from 'react';
import { GoogleComponent } from 'react-google-location'
const API_KEY = "";
//          locationBoxStyle={'custom-style'}
//          locationListStyle={'custom-style-list'}

function NewHome(){
    const [place , setplace] = useState({});
      console.log(place.coordinates)
    return(
              <div className={css.body}>
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:in'}
          coordinates={true}
  
          placeholder={'Start typing location'}

          onChange={(e) => { 
        
          setplace(e)
           console.log(place.coordinates)} }/>

      </div>
    );
}

export default NewHome;
import React, { useEffect, useState } from 'react'
import { getAnimes } from '../api/api';
import Anime from './Anime';
import Header from './Header'

export default function  Home() {

   const [animes,setAnimes]=useState(null);
    useEffect(() => {
      
     const data=getAnimes().then((data)=>{
        setAnimes(data)
         console.log(data);
         

      

     })
    
    



        
      }, []);
  return (
    <div>
       <Header/>
       <div className="row mt-5">
          {animes &&
            animes
              
              .map((anime, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
             <Anime anime={anime} key={i}/>
                  <br></br>
                </div>
              ))}
        </div>
       
    </div>
  )
}

import React, { useState,useEffect } from "react";
import DataPage from "./DataPage";
import 'bootstrap/dist/css/bootstrap.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


const MainPage=()=>{
    const [inputText, setInputText]=useState('');
    const [savedText, setSavedText]=useState('');
    const [isLoading, setIsLoading]=useState(false);
      
      const handleInputChane=(e)=>{
        setInputText(e.target.value)
    }

    const handleSaveChanges=()=>{
        setSavedText(inputText);
        setInputText("");
        
       
        
    }

    const [post, setpost]=useState(null);
    const key='6154078ae61a4789be7134626210310';

   
        useEffect(
            ()=>{
                if(savedText !== '')
                {
                setIsLoading(true);
                setTimeout(()=>{
                   
                   
                fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${savedText}`)
            .then((response)=>{
               
                if(!response.ok)
                {
                    console.log("error bad request")
                }
               return response.json();
                
            })
            .then((apiData)=>{
                //console.log(apiData);
                setpost(apiData);
               
            }).finally(()=>{
                setIsLoading(false);
            })
           
                },2000)
                
            }
            
        },[savedText]);
    
           
    
   


    return(
        <>
           
           <div  className="container-fluid no-gutters"  >
           <div className="row" >
            <div className="col-sm-12" >
           <div className="mainDiv " >
            <div  className="overlay" >
           
                <h1 className="mainHeading">Simple Weather App</h1>
                <span>
                <p className="p">{savedText  ?   post && post.current.condition.text  : 'based on weatherAPI'}   {post && (
                <img src={post.current.condition.icon} alt=""/>
                )}</p>
              
                </span>
                <br/>
                <div className="input">
                <input type="text" className="inputfield" placeholder="  Enter the city name" onChange={handleInputChane} value={inputText}/>
                <button className="button" onClick={handleSaveChanges}>CHECK</button>
                </div>
                <br/>
                {
                    //if theres the data run the following
                }
               {

                isLoading ?
                (
                <div className="loader-container">
                <div className="loader"></div>
                </div>
               )
                
                :
                (
                post &&
                <>
                <DataPage
                 country={post.location.country}
                 city={post.location.name}
                 wind={post.current.wind_kph}
                 pressure={post.current.pressure_mb}
                 humidity={post.current.humidity}
                 temp={post.current.temp_c}
                 />
                </>)
                
               }
            </div>
           </div>
           </div>
           </div>
           </div>
           
        </>
    )
}

export default MainPage;


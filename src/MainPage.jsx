import React, { useState,useEffect } from "react";
import FrontImg from "./asset/elizeu-dias-RN6ts8IZ4_0-unsplash.jpg";
import DataPage from "./DataPage";
const MainPage=()=>{
    const [inputText, setInputText]=useState('');
    const [savedText, setSavedText]=useState('');


    const mainDiv={
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${FrontImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    }

    const overlay={
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(77, 173, 221, 0.8)',
    }

    const mainHeading={
        textAlign: "center",
        paddingTop:"100px",
        color :"white",
        fontWeight :'bold',
        fontSize:'60px'
    }

    const p={
        textAlign: "center",
        color : 'white',
        fontSize:'20px',

    }

    const input={
        textAlign:'center',
        paddingTop:'20px'
    }

    const inputfield={
        border:'none',
        outline:'noen',
        width:'500px',
        height:'60px',
        borderRadius:'10px',
        borderTopRightRadius:'0px',
        borderBottomRightRadius:'0px',
    }

    const button={
        height:'60px',
        width:'100px',
        borderRadius:'10px',
        borderTopLeftRadius:'0px',
        borderBottomLeftRadius:'0px',
        border:'none',
        outline:'none',
        color:'black',
        fontWeight:'bold',
        backgroundColor:'rgba(218, 251, 8, 0.8)',
    }

   
      
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
                if(savedText !='')
                {
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
               
            })
           }
            }
            
            ,[savedText]);
    
            useEffect(()=>{
               
                console.log(post)
            },[post])
    
    
   


    return(
        <>
           
           <div style={mainDiv} className="container-fluid" >
           <div className="row">
            <div className="col-md-12">
            <div style={overlay}>
                <h1 style={mainHeading}>Simple Weather App</h1>
                <span>
                <p style={p}>{savedText  ?   post && post.current.condition.text  : 'based on weatherAPI'}   {post && (
                <img src={post.current.condition.icon} />
                )}</p>
              
                </span>
                <br/>
                <div style={input}>
                <input type="text" style={inputfield} placeholder="  Enter the city name" onChange={handleInputChane} value={inputText}/>
                <button style={button} onClick={handleSaveChanges}>CHECK</button>
                </div>
                <br/>
                {
                    //if theres the data run the following
                }
               {
                post &&(
               <DataPage
                 country={post.location.country}
                 city={post.location.name}
                 wind={post.current.wind_kph}
                 pressure={post.current.pressure_mb}
                 humidity={post.current.humidity}
                 temp={post.current.temp_c}
                 />
               )}
            </div>
           </div>
           </div>
           </div>
        </>
    )
}

export default MainPage;
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './App.css';
import BioData from './BioData';


function App() {      
    return(
        <>     
            <div className="vl">     
                <br></br>
                <img src={BioData.image} alt="Error Loading Image" className='rounded-corners'></img>                            
                <h1>Name </h1>    
                <p style={{backgroundColor: "rgb(0, 80, 196)", padding: "5px 3px"}}> {BioData.name} </p>        
                <h1>Age</h1> 
                <p> {BioData.age} </p>
                <h1>HomeTown </h1>   
                <p> {BioData.homeTown} </p>
                <h1>Summary </h1>   
                <p> {BioData.summary} </p>
                <h1>Social Accounts</h1>                   
                <p>Instagram : <a className="links" href={BioData.instaID}> @doc.foxy </a></p>
                <p>Facebook : <a className="links" href={BioData.facebookID}> Ammar Khan </a></p>
                <p>LinkedIn : <a className="links" href={BioData.linkedInID}> Ammar Khan </a></p>
                <p>Twitter : <a className="links" href={BioData.twitterID}> @SurgentFoxy </a></p>                
            </div>  
            <footer> Made By foxy © 2020</footer>     
        </>
    );

}

export default App;


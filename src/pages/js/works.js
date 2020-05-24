import React from 'react';
import "../css/works.css";
import Footer from '../../components/js/Footer.js';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import {Link} from "react-router-dom";


export default function works() {
    return (
        <div className="pageContainer">
            <div className= "container">
                <div className="leftSide">
                    <div className="intro">
                    <h2>Works</h2>
                    <p>Photographic collections, each exploring different</p>
                    <p> mediums of film and location.</p>
                </div>
                        <Link to="/about" className = "works-link">
                            <img class="works-thumb" src={img1} alt='Nature' ></img> 
                            <div class="overlay">Nature</div>
                        </Link>
                        <Link to="/about" className = "works-link">
                            <img class="works-thumb" src={img2} alt='Landscape' ></img>  
                            <div class="overlay">Landscape</div> 
                        </Link>
                </div>
                <div className="rightSide">
                    <Link to="/about" className = "works-link">
                        <img class="works-thumb" src={img3} alt='Urban' ></img>   
                        <div class="overlay">Urban</div> 
                    </Link>
                    <Link to="/about" className = "works-link">
                        <img class="works-thumb" src={img4} alt='Industrial' ></img>  
                        <div class="overlay">Industrial</div> 
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    
    )
}

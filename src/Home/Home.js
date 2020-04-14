import React from 'react';
import '../Car/Category.module.css';
import Form from "../Form/Form";
import sedan from '../imgs/sedan.jpg';
import sports from '../imgs/sports.jpg';
import suv from '../imgs/suv.jpg';

const Home = () => {
    return (
        <div>
            <div className="home-image">
            <img src={sedan} alt="sedan" />
            </div>
            <div className="home-content">
                <p>
                    <h2>
                    Save the classic, not just the sedan
                    </h2> 
               </p>
            </div>
            <div className="home-image1">
            <img src={sports} alt="sports" />
            </div>
            <div className="home-content1">
                <p>
                    <h2>
                        Our sports car has the fastest speed
                    </h2> 
               </p>
            </div>
            <div className="home-image2">
               <img src={suv} alt="suv" />
               <div className="home-content1">
                <p>
                    <h2>
                        Climb over mountains,take you to enjoy different sceneries
                    </h2> 
               </p>
            </div>
            </div>
            <div className = "contactInfo">
                Our Location: 1260 republican St. , Seattle, WA, 98109<br/>
                Operation Hours: 10am to 6pm <br/>
                Phone Number: 306-407-4672<br/>
            </div>

        </div>
    )
}

export default Home

import React from 'react';
// import {Redirect} from 'react-router-dom';
import cnf from '../imgs/cnf.jpg';
import suv1 from '../imgs/suv1.png';
import sedan1 from '../imgs/sedan1.png';
import truck from '../imgs/truck.png';
import mpv from '../imgs/mpv.png';




const Cate = () => {
    return (
        <div className= "main">


                <div className="cateInner">

                    <div className="img">
                    <span className="Text">Sedan</span>
                    <img className={"pic"} src= {sedan1} alt="Sedan" onClick={() => {window.location.href="/car/Sedan"}}/>
                    </div>

                    <div className="img">
                        <span className="Text">SUV</span>
                        <img className={"pic"} src={suv1} alt="SUV" onClick={() => {window.location.href="/car/SUV"}}/>
                    </div>

                    <div className="img">
                        <span className="Text">Sports Car</span>
                    <img className={"pic"} src={cnf} alt="Sports Car" onClick={() => {window.location.href="/car/Sports Car"}}/>
                    </div>

                    <div className="img">
                        <span className="Text">Truck</span>
                    <img className={"pic"}  src={truck} alt="Truck" onClick={() => {window.location.href="/car/Truck"}}/>
                    </div>

                    <div className="img">
                        <span className="Text">MPV</span>
                    <img className={"pic"} src={mpv} alt="MPV" onClick={() => {window.location.href="/car/MPV"}}/>
                    </div>

                </div>
        </div>
    )
}

export default Cate

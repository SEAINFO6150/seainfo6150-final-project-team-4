import React, { Component } from 'react'
import { Carousel } from 'antd';
import './index.css'

import banner1 from '../../assets/imag/banner1.png'
import banner3 from '../../assets/imag/banner3.jpg'

import banner2 from '../../assets/imag/banner2.jpeg'
import banner4 from '../../assets/imag/banner4.jpg'

export default class Banner extends Component {
    render() {
        return (
            <div className="bannerstyle">
                <Carousel autoplay>
                    <div  >
                       <a href="/list"> <img src={banner1} alt="跑车"  >
                        </img></a>
                    </div>
                    <div>
                       
                    <a href="/list"><img src={banner2} alt="suv" />
                    </a>
                    </div>
                    <div>
                        
                    <a href="/list"> <img src={banner3} alt="皮卡"  />
            </a>
                    </div>
                    <div>
                    <a href="/list"><img src={banner4} alt="轿车" />
                    </a>
                    </div>
                </Carousel>,

            </div>
        )
    }
}

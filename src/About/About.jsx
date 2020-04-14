import React from 'react';
import wzc from '../imgs/about/wzc.png';
import lzh from '../imgs/about/lzh.png';
import zh from '../imgs/about/zh.png';


const About = () => { 
    return (
    	<div className="about">
	    	<div className="start"> 
	    		<h1>Group 4</h1>
	    	</div>
	    	<div className= "cards">
				<div className="card">
					<img src={zh} alt="Zhang han" />
				  	<h1>Han Zhang</h1>
				  	<p className="title">20 spring</p>
				  	<p> Northeastern </p>
		    		<p> zhang.han6@husky.neu.edu </p>
		    		<a href="#"><i className="fa fa-dribbble"></i></a>
  					<a href="#"><i className="fa fa-twitter"></i></a>
  					<a href="#"><i className="fa fa-linkedin"></i></a>
  					<a href="#"><i className="fa fa-facebook"></i></a>
		    	</div>
		    	<div className="card">
					<img src={lzh} alt="Zehua Li" />
				  	<h1>Zehua Li</h1>
				  	<p className="title">20 spring</p>
				  	<p> Northeastern </p>
		    		<p> li.zehua@husky.neu.edu  </p>
		    		<a href="#"><i className="fa fa-dribbble"></i></a>
  					<a href="#"><i className="fa fa-twitter"></i></a>
  					<a href="#"><i className="fa fa-linkedin"></i></a>
  					<a href="#"><i className="fa fa-facebook"></i></a>
		    	</div>
		    	<div className="card">
					<img src={wzc} alt="Zichun Wang" />
				  	<h1>Zichun Wang</h1>
				  	<p className="title">20 spring</p>
				  	<p> Northeastern </p>
		    		<p> wang.zichu@husky.neu.edu </p>
		    		<a href="#"><i className="fa fa-dribbble"></i></a>
  					<a href="#"><i className="fa fa-twitter"></i></a>
  					<a href="#"><i className="fa fa-linkedin"></i></a>
  					<a href="#"><i className="fa fa-facebook"></i></a>
		    	</div>
		    </div>
	    </div>
    )
}

export default About
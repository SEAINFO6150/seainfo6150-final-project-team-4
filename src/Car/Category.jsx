import React, {Component} from "react";
import {Redirect} from 'react-router-dom'; 
import General from "./General.jsx";

export default class Category extends Component { 	

	constructor(props) {
	    super(props);	
	    this.state = {
	    	category: props.category,
	    }
  	}	

	render() {
		if(this.props.data[this.state.category] === undefined ) {
			return (<Redirect to = "/err" />);
		} else {
			return (
		    	<div className="-category">
		    		<div className="category-name">
		    			<h6 > Category: {this.state.category.toUpperCase()} </h6> 
		    		</div>
		    		<ul className="-category-list">
		    			{this.props.data[this.state.category].map((car, index) => (
	        				<li key={car.id}>
	        					<General 
	        					index = {index}
	        					category= {this.state.category} 
	        					car= {car} />
	        				</li>
	      				))}
		    		</ul>
		    	</div>
	    	);
		}
	}
}
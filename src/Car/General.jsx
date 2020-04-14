import React, {Component} from "react";

export default class General extends Component { 
	constructor(props) {
	    super(props);
	    this.state = {
	    	category: props.category,
	    	index: props.index,
			name: props.car.name,
			url: props.car.image_url,
			price: props.car.price
	    };
  	}	

	render() {
	    return (
	    	<div className="-general">
	    		<div className="image">
	    			<img src={this.state.url} alt={this.state.title} />
	    		</div>
	    		<div className="content">
				<a className= "name item" href={this.state.url}>{this.state.name}</a> 
	    			<span className="description item">Price:{this.state.price}</span>
	    			<a className="details grey item" href={"/car/" + this.state.category + "/" + this.state.index}> Details </a>
	    		</div>
	    	</div>
	    );
	}
}
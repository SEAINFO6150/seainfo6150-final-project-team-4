import React, {Component} from "react";

export default class UserLogin extends Component { 
	
	constructor(props) {
	    super(props);
  	}	

	render() {
	    return (
	    	<div className="login">
	    	<h1>Login</h1>  
        	<form method="post">  
            <input  type="text" required="required" placeholder="Name" name="n"></input><br />
            <input  type="password" required="required" placeholder="Password" name="p"></input><br />
        	</form> 
			<form method ="get" action = "/">
			<a href="/register"> Dont't have an account? </a> <br/>
			<button type="submit">Login</button>   
			</form>
	    	</div>
	    );
	}
}
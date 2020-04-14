import React, {Component} from "react";

export default class UserRegister extends Component { 
	
	constructor(props) {
	    super(props);
  	}	

	render() {
	    return (
	    	<div className="register">
			<h2>Registration</h2>
	    <form method="post">  
            <input type="text" required="required" placeholder="Name" name="n"></input><br /> 
            <input type="password" required="required" placeholder="Password" name="p"></input><br />  
            <input type="re-password" required="required" placeholder="Re-Password" name="r"></input><br />  
            <input type="e-mail" required="required" placeholder="E-mail" name="e"></input><br />
            <input type="phone" required="required" placeholder="Phone" name="p"></input><br />               
        </form>
		<form method ="get" action = "/">
		<button type="submit">Register</button>   
		</form>
	    	</div>
	    );
	}
}
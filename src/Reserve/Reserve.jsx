import React from 'react';
import styles from "../Reserve/Reserve.css";

class contactus extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            advice: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
	    alert(`Dear ${this.state.username} , We received your reservation request, one of our agent will contact you soon!`);
    }

    render(){
        return (
            <div className={styles.body}>
                <h3 className={styles.title}>Make a reservation</h3>
                <div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input required="required" type="name" value={this.state.username} onChange={this.handleChange} name="username" placeholder="enter your name" maxLength="10"/>
                        </label><br />
                        <label>
                            E-mail:
                            <input required="required" type="email" name="email" placeholder="enter your email" />
                        </label><br />
                        <label>
                            <h4 className={styles.title}>Select gender</h4>
                            <div>
                            <label>male<input type="radio" name="gender"/></label><br />
                            <label>female<input type="radio" name="gender"/></label><br />
                            </div>
                            </label><br />
                        <label>
                             <h5 className={styles.title}>Any request</h5>
                            <textarea value={this.state.advice} onChange={this.handleChange} name="advice" rows="5" cols="50">Plese write down what you want to tell us here!</textarea>
                        </label>
                        <br/>
                        <input className={styles.button} type="submit" value="Add" />
                    </form>
                </div>
                <div className={styles.letter}>
                    <p>  If you haven't received any phone call from us  </p>
                    <p>  You can also call us in number: 123456789  </p>
                <div>
                <p>  Our Address  </p>
                <p>  neu-car St  </p>
                </div>
                </div>
            </div>
        );
    }
};

export default contactus;



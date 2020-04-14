import React, { Component } from "react";

export default class Detail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            category: props.category,
            index: props.index,
            data: props.data,
            hiddeForm: false,
            hiddeSubmission: true,
            firstname: "",
            lastname: "",
            cellPhopne: "",
            numofGuest: "",
            reservationDate: "",
            reservationTime: "",
            ImageEnLarge: false
        }
    }

    submitForm = () => {

        if(this.state.firstname.trim().length == 0 || this.state.lastname.trim().length == 0 || this.state.cellPhopne.trim().length == 0 || this.state.reservationDate === '' || this.state.reservationTime === '' ||this.state.numofGuest === ''){
            alert("Please enter or select every input in form")
        }else if(isNaN(this.state.cellPhopne)) {
            alert("Invalid phone number,please enter only number")
        }else if(new Date(this.state.reservationDate) < new Date()){
            alert("In order to get your best experience,Please take reservation aleast 2 days after today")
        }else {
            this.setState({
            hiddeForm: true,
            hiddeSubmission: false
            })
        }
    }

    formChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                        <form className={styles.detail_form} id="reservateion" hidden={this.state.hiddeForm} >
                            First Name: <br />
                            <input type="text" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.formChange} ></input><br />
                            Last Name: <br></br>
                            <input type="text" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.formChange} ></input><br />
                            Phone Number <br />
                            <input type="text" placeholder="Phone Number" name="cellPhopne" value={this.state.cellPhopne} onChange={this.formChange} ></input><br />
            
                            Reservation Date and Time
                            <br />
                            <input type="date" name="reservationDate" onChange={this.formChange}></input>
                            <select className={styles.reservation_selector} name="reservationTime" form="reservateion" value={this.state.vale} onChange={this.formChange}>
                                <option value="" selected="selected">Please select time</option>
                                <option value="9am-12am">9am-12am</option>
                                <option value="1pm-4pm">1pm-4pm</option>
                            </select>
                            <br />
                            <button className={styles.reservation_button} type="button" onClick={this.submitForm} >Make Reservation</button>
                        </form>
                        {this.state.hiddeSubmission ? null :
                            <div>
                                <h2>Thank you! We got your reservateion   See you soon</h2>
                                <table>
                                    <tr>
                                        <td>First Name</td>
                                        <td>{this.state.firstname}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td>{this.state.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td>Your cellphone</td>
                                        <td>{this.state.cellPhopne}</td>
                                    </tr>
                    
                                    <tr>
                                        <td>Reservation Date</td>
                                        <td>{this.state.reservationDate}</td>
                                    </tr>
                                    <tr>
                                        <td>Reservation Time</td>
                                        <td>{this.state.reservationTime}</td>
                                    </tr>
                                </table>
                            </div>
                        }
                    </div>
        )
    }
}
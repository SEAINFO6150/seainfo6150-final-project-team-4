import React, { Component } from "react";
import styles from '../Car/Detail.module.css'

export default class Detail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            category: props.category,
            index: props.index,
            data: props.data,
            hiddeForm: false,
            hiddeSubmission: true,
            ImageEnLarge: false
        }
    }
    render() {
        return (
            <div>
                <h1 className={styles._detai_H1}>{this.props.data[this.props.category][this.props.index].name}</h1>
                <div className={styles._detai_container}>
                    <div className={styles._image_container}>
                        <img className={styles._image} src={this.props.data[this.props.category][this.props.index].image_url} alt={this.props.data[this.props.category][this.props.index].name}/>
                    </div>
                    <div className={styles.detail_text}>
                        <table>
                            <tr>
                                <th>CAR</th>
                                <th>CarDetail</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{this.props.data[this.props.category][this.props.index].name}</td>
                            </tr>
                            <tr>
                                <td>Prices</td>
                                <td>{this.props.data[this.props.category][this.props.index].price}</td>
                            </tr>
                            <tr>
                                <td>Acerelation</td>
                                <td>{this.props.data[this.props.category][this.props.index].speed}</td>
                            </tr>
                            <tr>
                                <td>Engine</td>
                                <td>{this.props.data[this.props.category][this.props.index].engine}</td>
                            </tr>
                        
                        </table>
                        <button className={styles.button} onClick={() => {window.location.href="/Reserve"}}>Make an reservation!</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}


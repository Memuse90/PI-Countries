import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 import Cd from './CountryCard.module.css'
export class CountryCard extends Component {

    render(){

        return(
            <div className={Cd.card}>
                <Link to={`/detail/${this.props.id}`}><h2>{this.props.name}</h2> </Link>
                <h3>{this.props.continent}</h3>
                <img src={this.props.imageURL} alt='Image not found' width='100px' height='75px'/>

            </div>
        );
    };
}

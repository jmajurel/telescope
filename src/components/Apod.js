import React, { Component } from 'react';
import { apiCall } from '../services/api';

import './Apod.css';

export default class Apod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {}
    }
  }

  async componentWillMount(){
    const API_URL = 'https://api.nasa.gov/planetary/apod'
    const apod = await apiCall(`${API_URL}?api_key=${process.env.REACT_APP_NASAKEY}`);
    this.setState({ apod });
  }

  render() {
    return (
      <div className='container Apod'>

        <div className='presentation'>
	  <h2>Astronomic Picture of the Day</h2>
	  <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer</p>
	</div>

	<div className='content'>
	  <img 
	    className='apod-img' 
	    src={this.state.apod.url}
	    alt='apod'
	  />
	  <div className='apod-desc'>
	    <h3>
	      {this.state.apod.title}
	      <span>
	        <em> from {this.state.apod.copyright || 'Unknown source'}</em>
	      </span>
	    </h3>
	    <p>{this.state.apod.explanation}</p>
	  </div>
	</div>

      </div>
    );
  }
}

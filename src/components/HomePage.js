import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Apod from './Apod';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {}
    }
  }
  render(){
    return (
      <div className='HomePage'>
        <Carousel />
	<div className='container-fluid welcome'>
	  <h1>Welcome to Telescope</h1>
	  <h3>The great place to visualize real time space data</h3>
	</div>
	<Apod />

	<div className='container visualization'>
	  <div className='presentation'>
	    <h2>The visualizations</h2>
	    <p>You will find some interresting information about the space data through different type of visualization</p>
	  </div>

	  <div className='card-deck'>
	    <div className="card text-center">
	      <img className="card-img-top" src="Asteroid.jpg" alt="Asteroids" />
	      <div className="card-body">
		<h5 className="card-title">Asteroids Observations</h5>
		<p className="card-text">Real time information about asteroids in our galaxy</p>
		<Link to="/asteroids" className="btn btn-primary">Check Out</Link>
	      </div>
	    </div>

	    <div className="card text-center">
	      <img className="card-img-top" src="SpaceWeather.jpg" alt="Space Weather" />
	      <div className="card-body">
		<h5 className="card-title">Space Weather</h5>
		<p className="card-text">Coronal ejection of solar particules</p>
		<Link to="/weather" className="btn btn-primary">Check Out</Link>
	      </div>
	    </div>

	  </div>
	</div>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsteroids } from '../store/actions/asteroids';
import { plotAsteroids } from '../helpers/asteroids';

import './Asteroids.css';

class Asteroids extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().substring(0, 10) 
    }
  }

  componentWillMount() {
    this.props.fetchAsteroids(this.state.date);
  }

  componentDidUpdate() {
    plotAsteroids(this.props.asteroids);
  }

  handleChange = e => {
    this.props.fetchAsteroids(e.target.value);
    this.setState({date: e.target.value});
  }

  render() {
    return (
      <div className='Asteroids'>
        <div className='astro'>
	  <div className='astro-clt'>
	    <label forhtml='date'>Select a date:</label>
	    <input 
	      type='date' 
	      id='date' 
	      max='2018-09-16'//{new Date().toISOString().substring(0, 10)}
	      onChange={this.handleChange}
	      value={this.state.date}/>
	  </div>
	  <div className='astro-viewer'>
            <div className='astro-tooltip'></div>
	    <svg></svg>
	  </div>
	  <p className='legend'>
	    <em>
	      The circles in the graph above shows the presence of asteroids on their closed approach date to Earth. 
	      The circle sizes are function of their observed diameter.
	      The color red represents a potentially hazardous asteroid moving toward earth.
	    </em>
	  </p>
	</div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return({
    asteroids: state.asteroids
  });
}

export default connect(mapStateToProps,{ fetchAsteroids })(Asteroids);

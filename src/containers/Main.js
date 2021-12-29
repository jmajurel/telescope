import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Asteroids from '../containers/Asteroids';
import SpaceWeather from '../containers/SpaceWeather';

class Main extends Component {
  render(){
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/asteroids' component={Asteroids}/> 
	<Route exact path='/weather' component={SpaceWeather} />
      </Switch>
    );
  }
}

export default Main;

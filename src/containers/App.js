import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Main from './Main';

const store = configureStore();

//create the redux store here
class App extends Component {

  render() {
    return (
      <Provider store={store}>
	<Router> 
	  <div className="App">
	    <NavBar />
	    <Main />
	    <Footer />
	  </div>
	</Router>
      </Provider>
    );
  }
}

export default App;

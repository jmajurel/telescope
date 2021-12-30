import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "../store";

const Main = lazy(() => import("./Main"));
const Footer = lazy(() => import("../components/Footer"));
const NavBar = lazy(() => import("../components/NavBar"));

const store = configureStore();

//create the redux store here
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="App">
              <NavBar />
              <Main />
              <Footer />
            </div>
          </Suspense>
        </Router>
      </Provider>
    );
  }
}

export default App;

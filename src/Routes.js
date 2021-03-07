import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//경토님
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import SignIn from './Pages/SignIn/SignIn';

//진석님
import Airline from './Pages/Airline/Airline';
import AirlineList from './Pages/Airline/AirlineList/AirlineList';

//정민님
import StayMain from './Pages/Stay/StayMain/StayMain';
import StayList from './Pages/Stay/StayList/StayList';
import StayDetail from './Pages/Stay/StayDetail/StayDetail';

class Routes extends Component {
  navHandler = () => {
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/staymain'
    ) {
      return <Nav type="main" />;
    } else {
      return <Nav type="after" />;
    }
  };
  render() {
    return (
      <Router>
        {this.navHandler()}
        <Switch>
          <Route exact path="/" component={Airline} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PlacePage from './PlacePage';
import SearchPage from './SearchPage';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Router = ({geolocation}) => {
  if (!geolocation) {
    return <Loading/>
  }

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/search/:query"><SearchPage/></Route>
        <Route path="/place/:id"><PlacePage/></Route>
        <Route path="/"><HomePage/></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    geolocation: state.geolocation
  }
}

export default connect(mapStateToProps)(Router);

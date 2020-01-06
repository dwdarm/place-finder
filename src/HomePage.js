import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchSection from './components/SearchSection';
import HomePlace from './components/HomePlaces';

const HomePage = props => {
  const history = useHistory();

  return (
    <div>
      <NavBar/>
      <SearchSection history={history} />
      <section className="section">
        <div className="container">
          <p className="title is-5">Nearby Places</p>
          <HomePlace/>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlaceSection from './components/PlaceSection';

const PlacePage = props => {
  const history = useHistory();
  const { id } = useParams();

  return(
    <div>
      <NavBar/>
      <section className="section">
        <div className="container">
          <PlaceSection placeId={id} history={history}/>
        </div>
      </section>
    </div>
  );
}

export default PlacePage;

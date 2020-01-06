import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faStreetView,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';

const PlaceItem = props => {
  return(
    <div className="box">
      <p className="is-text-capped">
        <span className="icon has-text-info">
          <FontAwesomeIcon icon={faBuilding}/>
        </span>
        <span><strong>{props.title}</strong></span>
      </p>
      <p className="is-text-capped">
        <span className="icon has-text-danger">
          <FontAwesomeIcon icon={faMapMarkerAlt}/>
        </span>
        <span className="has-text-grey"><small>{props.vicinity}</small></span>
      </p>
      <p className="is-text-capped">
        <span className="icon has-text-success">
          <FontAwesomeIcon icon={faStreetView}/>
        </span>
        <span className="has-text-grey">
          <small>{`${props.distance/1000} km`}</small>
        </span>
      </p>
    </div>
  );
}

const PlaceList = props => {
  return(
    <InfiniteScroll
      loadMore={props.loadMore}
      hasMore={props.hasMore}
      loader={<Loading key={0}/>}>
      <div className="columns is-multiline">
        {
        props.data.map(item => (
        <div key={item.id} className="column is-full">
          <Link to={`/place/${item.id}`}>
            <PlaceItem
              title={item.title}
              vicinity={item.vicinity}
              distance={item.distance}
              category={item.category.id}
            />
          </Link>
        </div>
        ))
        }
      </div>
    </InfiniteScroll>
  );
}

export default PlaceList;

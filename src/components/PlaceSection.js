import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlace } from '../store/actions/places';
import mapView from '../common/api/map/mapView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './ImageCarousel';
import Loading from './Loading';

const PlaceSection = ({item, place, history, dispatch}) => {
  const [ image, setImage ] = useState(null);

  useEffect(() => {
    if (item === null) {
      history.replace('/');
    } else {
      if (!place) {
        dispatch(fetchPlace(item.href));
      }
    }
  });

  useEffect(() => {
    if (place) {
      setImage(mapView({
        c: `${place.location.position[0]},${place.location.position[1]}`,
        z: 14
      }));
    }
  });

  if (!place) {
    return <Loading/>
  }

  return(
    <div className="columns">

      <div className="column is-two-thirds">

        <div className="columns is-multiline">

          <div className="column is-full">
            <div className="box">
              <p className="title is-4">{place.name}</p>
              <p className="subtitle is-5 has-text-grey">
                {place.categories[0] ? place.categories[0].title : null}
              </p>
            </div>
          </div>

          <div className="column is-full">
            <div className="box">
              {place.media && place.media.images && place.media.images.items.length ?
              <ImageCarousel images={place.media.images.items} /> :
              <p className="has-text-centered">No image found!</p>}
            </div>
          </div>

        </div>

      </div>

      <div className="column is-one-third">
        <div className="box">

          <p className="title is-5">Info</p>

          { /* Map */ }
          {image !== null ?
          <div className="media">
            <div className="media-content">
              <figure className="image is-fullwidth">
                <img src={image}/>
              </figure>
            </div>
          </div> : null}

          { /* address */}
          <div className="media">
            <p className="media-left">
              <span className="icon has-text-danger">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
              </span>
            </p>
            <p className="media-content">
              <span className="has-text-grey">
                {place.location.address.text.replace(/<br\/>/g, ', ')}
              </span>
            </p>
          </div>

          { /* Phone */}
          {
          place.contacts && place.contacts.phone ?
          <div className="media">
            <p className="media-left">
              <span className="icon has-text-info">
                <FontAwesomeIcon icon={faPhone}/>
              </span>
            </p>
            <p className="media-content">
              {
              place.contacts.phone.map(item => (
                <span key={item.value} className="has-text-grey">{item.value}</span>
              ))
              }
            </p>
          </div> : null
          }

          { /* Email */}
          {
          place.contacts && place.contacts.email ?
          <div className="media">
            <p className="media-left">
              <span className="icon has-text-info">
                <FontAwesomeIcon icon={faEnvelope}/>
              </span>
            </p>
            <p className="media-content">
              {
              place.contacts.email.map(item => (
                <span key={item.value} className="has-text-grey">{item.value}</span>
              ))
              }
            </p>
          </div> : null
          }

          { /* Globe */}
          {
          place.contacts && place.contacts.website ?
          <div className="media">
            <p className="media-left">
              <span className="icon has-text-info">
                <FontAwesomeIcon icon={faGlobe}/>
              </span>
            </p>
            <p className="media-content">
              {
              place.contacts.website.map(item => (
                <span key={item.value} className="has-text-grey">{item.value}</span>
              ))
              }
            </p>
          </div> : null
          }

        </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state, props) => {
  const { places, search } = state;
  const { placeId } = props;
  const item = search[placeId] ? search[placeId] : null;
  const place = places[placeId] ? places[placeId] : null;

  return { item, place }
};


export default connect(mapStateToProps)(PlaceSection);

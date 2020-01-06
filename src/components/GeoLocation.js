import React, { useEffect } from 'react';
import { getGeolocation } from '../store/actions/geolocation';
import { connect } from 'react-redux';

const GeoLocation = ({ dispatch }) => {
  useEffect(() => { dispatch(getGeolocation()) });
  return null;
}

export default connect()(GeoLocation);

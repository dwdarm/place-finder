import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../store/actions/places';
import PlaceList from './PlaceList';

const HomePlaces = props => {
  const { items, hasMore, isLoading, dispatch } = props;
  const loadMore = () => {
    if (!isLoading) {
      dispatch(fetchHome());
    }
  }

  return <PlaceList data={items} hasMore={hasMore} loadMore={loadMore}/>
}

const mapStateToProps = state => {
  const { home, search } = state;
  return {
    items: home.ids.length ? home.ids.map(item => search[item]) : [],
    hasMore: home.hasMore,
    isLoading: home.isLoading
  }
}

export default connect(mapStateToProps)(HomePlaces);
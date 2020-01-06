import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../store/actions/places';
import PlaceList from './PlaceList';

const SearchResult = props => {
  const { query, items, hasMore, isLoading, dispatch } = props;
  const loadMore = () => {
    if (!isLoading) {
      dispatch(fetchSearch(query));
    }
  }

  return <PlaceList data={items} hasMore={hasMore} loadMore={loadMore}/>
}

const mapStateToProps = state => {
  const { searchResult, search } = state;
  return {
    items: searchResult.ids.length ? searchResult.ids.map(item => search[item]) : [],
    hasMore: searchResult.hasMore,
    isLoading: searchResult.isLoading
  }
}

export default connect(mapStateToProps)(SearchResult);

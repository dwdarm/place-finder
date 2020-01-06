import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { autoSuggest } from '../store/actions/places';
import JumboTron from './JumboTron';

const SearchSection = ({ items, dispatch, history }) => {
  const [ query, setQuery ] = useState('');

  const onTextChange = event => {
    if (event.target.value.length > 3) {
      setQuery(event.target.value);
      dispatch(autoSuggest(event.target.value));
    }
  }

  const onSubmit = () => {
    if (query.length > 3) {
      dispatch({type:'CLEAR_SEARCH_RESULT'});
      history.push(`search/${query}`);
    }
  }

  return (
    <JumboTron
      onTextChange={onTextChange}
      onSubmit={onSubmit}
      dataListItems={items}
    />
  )
}

const mapStateToProps = state => {
  return { items: state.autosuggest }
}

export default connect(mapStateToProps)(SearchSection);

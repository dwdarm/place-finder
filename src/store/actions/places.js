import axios from 'axios';
import browse from '../../common/api/place/browse';
import autosuggest from '../../common/api/place/autosuggest';
import search from '../../common/api/place/search';

export const fetchHome = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const { lat, lot } = state.geolocation;
    const { next } = state.home;

    if (next !== null) {
      let res = await axios(next);
      return dispatch({
        type:'ADD_HOME_ARRAY',
        items: res.data.items,
        next: res.data.next ? res.data.next : null
      });
    }

    const res = await browse({at: `${lat},${lot}`});
    dispatch({
      type:'ADD_HOME_ARRAY',
      items: res.data.results.items,
      next: res.data.results.next ? res.data.results.next : null
    });
  }
}

export const fetchSearch = query => {
  return async (dispatch, getState) => {
    const state = getState();
    const { lat, lot } = state.geolocation;
    const { next } = state.searchResult;

    if (next !== null) {
      let res = await axios(next);
      return dispatch({
        type:'ADD_SEARCH_RESULT_ARRAY',
        items: res.data.items,
        next: res.data.next ? res.data.next : null
      });
    }

    const res = await search({q: query, at: `${lat},${lot}`});
    dispatch({
      type:'ADD_SEARCH_RESULT_ARRAY',
      items: res.data.results.items,
      next: res.data.results.next ? res.data.results.next : null
    });
  }
}

export const fetchPlace = url => {
  return async dispatch => {
    const res = await axios(url);
    dispatch({
      type: 'ADD_PLACE_ITEM',
      place: res.data
    })
  }
}

export const autoSuggest = query => {
  return async (dispatch, getState) => {
    const state = getState();
    const { lat, lot } = state.geolocation;
    const res = await autosuggest({
      q: query,
      at: `${lat},${lot}`
    });

    dispatch({
      type:'ADD_AUTOSUGEST_ARRAY',
      items: res.data.results
    });
  }
}

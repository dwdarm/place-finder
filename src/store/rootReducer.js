import { combineReducers } from 'redux';
import geolocation from './reducers/geolocation';
import search from './reducers/search';
import home from './reducers/home';
import places from './reducers/places';
import autosuggest from './reducers/autosuggest';
import searchResult from './reducers/searchResult';

const rootReducer = combineReducers({
  geolocation,
  search,
  home,
  places,
  autosuggest,
  searchResult
});

export default rootReducer;

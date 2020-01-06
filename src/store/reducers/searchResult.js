const defaultState = {
  ids: [],
  next: null,
  hasMore: true,
  isLoading: false
}

const searchResult = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_SEARCH_RESULT_ARRAY':
      return {
        ids: state.ids.concat(action.items.map(item => item.id)),
        next: action.next,
        hasMore: action.next !== null ? true : false,
        isLoading: false
      }
    case 'REQUEST_SEARCH_RESULT':
      return {
        ...state,
        isLoading: true
      }
    case 'CLEAR_SEARCH_RESULT':
    case 'SET_GEOLOCATION':
    case 'CLEAR':
      return defaultState;
    default:
      return state
  }
}

export default searchResult;

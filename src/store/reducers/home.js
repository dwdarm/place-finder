const defaultState = {
  ids: [],
  next: null,
  hasMore: true,
  isLoading: false
}

const home = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_HOME_ARRAY':
      return {
        ids: state.ids.concat(action.items.map(item => item.id)),
        next: action.next,
        hasMore: action.next !== null ? true : false,
        isLoading: false
      }
    case 'REQUEST_HOME':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_GEOLOCATION':
    case 'CLEAR':
      return defaultState;
    default:
      return state
  }
}

export default home;

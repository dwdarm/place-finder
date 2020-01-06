const places = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_PLACE_ITEM':
      return {
        ...state,
        [action.place.placeId]: action.place 
      }
    case 'CLEAR':
      return {}
    default:
      return state;
  }
}

export default places;
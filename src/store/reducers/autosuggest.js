const autosuggest = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AUTOSUGEST_ARRAY':
      return action.items;
    case 'CLEAR':
      return []
    default:
      return state;
  }
}

export default autosuggest;

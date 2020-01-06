const transformSearchArrayToObject = data => {
  return data.reduce((result, item) => {
    result[item.id] = item;
    return result;
  }, {});
}

const addSearchArray = (state, data) => {
  return {
    ...state,
    ...transformSearchArrayToObject(data)
  }
}

const addSearchItem = (state, data) => {
  return {
    ...state,
    [data.id]: data
  }
}

const search = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_SEARCH_ARRAY':
      return addSearchArray(state, action.items);
    case 'ADD_SEARCH_ITEM':
      return addSearchItem(state, action.item);
    case 'ADD_HOME_ARRAY':
      return addSearchArray(state, action.items);
    case 'ADD_SEARCH_RESULT_ARRAY':
      return addSearchArray(state, action.items);
    case 'CLEAR':
      return {}
    default:
      return state;
  }
}

export default search;

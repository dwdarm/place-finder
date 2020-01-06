const coords = {
  lat: '-6.200000',
  lot: '106.816666'
}

const geolocation = (state = null, action) => {
  switch(action.type) {
    case 'SET_GEOLOCATION':
      return {
        lat: action.lat,
        lot: action.lot
      }
    default:
      return state;
  }
}

export default geolocation;

export const getGeolocation = () => {
  return dispatch => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          if (pos) {
            dispatch({
              type:'SET_GEOLOCATION',
              lat: pos.coords.latitude,
              lot: pos.coords.longitude
            });
          } else {
            dispatch({
              type:'SET_GEOLOCATION',
              lat: '-6.200000',
              lot: '106.816666'
            });
          }
        },
        err => {
          dispatch({
            type:'SET_GEOLOCATION',
            lat: '-6.200000',
            lot: '106.816666'
          });
        }
      );
    }
  }
}

import axios from 'axios';
import { APP_ID, APP_CODE, BASE_MAP_URL } from '../config';

const mapView = params => {
  /*
  return axios.get(`${BASE_MAP_URL}/mapview`, {
    params: {
      ...params,
      app_id: APP_ID,
      app_code: APP_CODE
    }
  });*/

  return `${BASE_MAP_URL}/mapview?c=${params.c}&z=${params.z}&app_id=${APP_ID}&app_code=${APP_CODE}`
}

export default mapView;

import axios from 'axios';
import { APP_ID, APP_CODE, BASE_PLACES_URL } from '../config';

const browse = params => {
  return axios.get(`${BASE_PLACES_URL}/browse`, {
    params: {
      size: 20,
      tf: 'plain',
      ...params,
      app_id: APP_ID,
      app_code: APP_CODE
    }
  });
}

export default browse;
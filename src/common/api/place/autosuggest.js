import axios from 'axios';
import { APP_ID, APP_CODE, BASE_PLACES_URL } from '../config';

const autosuggest = params => {
  return axios.get(`${BASE_PLACES_URL}/autosuggest`, {
    params: {
      size: 20,
      tf: 'plain',
      ...params,
      app_id: APP_ID,
      app_code: APP_CODE
    }
  });
}

export default autosuggest;

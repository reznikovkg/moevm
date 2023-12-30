import { setApiClient } from "../services/api";

const NO_REQUEST = false

export default ({ $axios }, inject) => {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    },
    baseURL: 'http://localhost:9999/api/'
  })

  api.interceptors.request.use(
    (config) => {
      if (NO_REQUEST) {
        throw Error()
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  setApiClient(api)

  inject('api', api)
}

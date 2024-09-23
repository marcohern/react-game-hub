import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key:'175ca86901954f3d8214f0cd486bf2ae'
  }
});

interface Pager<T> {
  count:number;
  results: T[];
}

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint:string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<Pager<T>>(this.endpoint).then((res) => res.data.results)
  };
  
  get = (config?:AxiosRequestConfig) => axiosInstance
    .get<T[]>(this.endpoint, config)
    .then((res) => res.data);
}

export default ApiClient;

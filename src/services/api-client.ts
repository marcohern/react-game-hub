import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key:'175ca86901954f3d8214f0cd486bf2ae'
  }
});

export interface Pager<T> {
  count:number;
  next: string|null;
  results: T[];
}

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint:string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<Pager<T>>(this.endpoint).then((res) => res.data)
  };
  
  get = (config?:AxiosRequestConfig) => { 
    return axiosInstance
      .get<Pager<T>>(this.endpoint, config)
      .then((res) => {
        return res.data;
      });
  }
}

export default ApiClient;

import { useEffect, useState } from "react";
import { axiosInstance } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint:string, requestConfig?:AxiosRequestConfig, deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axiosInstance
      .get<FetchResponse<T>>(endpoint, {...requestConfig, signal:controller.signal})
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, deps ? [...deps] : []);
 
  return { data, error, isLoading };
}

export default useData;
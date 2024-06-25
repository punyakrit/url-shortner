import {useState} from "react";

const useFetch = (cb: (arg0: {}, arg1: any) => any, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null || false);
  const [error, setError] = useState(null );

  const fn = async (...args: any[]) => {
    setLoading(true);
    setError(null);
    try {
      //@ts-ignore
      const response = await cb(options, ...args);
      setData(response);
      setError(null);
    } catch (error) {
            //@ts-ignore

      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, error, fn};
};

export default useFetch;
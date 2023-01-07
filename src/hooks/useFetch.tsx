import { useState, useEffect } from 'react';
const useFetch = (url:string, options: any) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url, options]);
  return {data}
}
export default useFetch;

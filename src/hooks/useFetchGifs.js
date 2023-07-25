import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  const getGifsPromise = async () => {
    const result = await getGifs(category);
    setimages(result);
    setisLoading(false)
  };

  useEffect(() => {
    getGifsPromise();
  }, []);

  return {
    isLoading,
    images,
  };
};

export default useFetchGifs;

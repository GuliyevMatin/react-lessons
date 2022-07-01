import { createContext, useContext, useEffect } from "react";
import { axios } from "axios";
const seriesProvider = createContext();

export const SeriesProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios("http://www.omdbapi.com/?apikey=11de7fb1&s=series").then(
      (response) => {
        setSeries([...series, response.data]);
      }
    );
  }, []);

  const values = {
    series,
    setSeries,
  };

  return (
    <seriesProvider.Provider value={values}>{children}</seriesProvider.Provider>
  );
};


export const useSeriesProvider = ()=>{
    const object = useContext(homeProvider)

    return object
}

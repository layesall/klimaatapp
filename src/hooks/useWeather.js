import { useEffect, useState } from "react";
import { getApiUrl } from "../utils/utils";

export default function useWeather(city) {
  const [weather, setWeather] = useState([]);
  const api_url = getApiUrl(city);

  useEffect(() => {
    fetch(api_url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (weather !== []) {
    return weather;
  }
}

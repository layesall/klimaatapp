import { API_KEY } from "../constants/api-key";
import { FontAwesome } from "@expo/vector-icons";

export const getIcon = (name, color, size) => {
  return <FontAwesome name={name} color={color} size={size} />;
};

export const getApiUrl = (cityName) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=fr`;
};

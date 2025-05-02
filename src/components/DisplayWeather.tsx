import { BsCloudFog2Fill, BsCloudRainFill } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { IoIosCloud } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiDaySunny, WiHumidity } from "react-icons/wi";

import { useSelector } from "react-redux";

import { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { RootState } from "../redux/store";
import { fetchWeather } from "../redux/weather/weatherSlice";


const WeatherCard = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const getWeatherIcon = (condition: string) => {
    const main = condition.toLowerCase();
    if (main.includes("clear"))
      return <WiDaySunny className="text-yellow-400 text-7xl" />;
    if (main.includes("cloud"))
      return <IoIosCloud className="text-gray-500 text-7xl" />;
    if (main.includes("rain"))
      return <BsCloudRainFill className="text-blue-500 text-7xl" />;
    if (main.includes("fog") || main.includes("mist"))
      return <BsCloudFog2Fill className="text-gray-400 text-7xl" />;
    if (main.includes("haze") || main.includes("smoke"))
      return <TiWeatherPartlySunny className="text-orange-300 text-7xl" />;
    return <FiLoader className="text-7xl animate-spin" />;
  };

  const handleSearch = () => {
    if (city.trim() !== "") dispatch(fetchWeather(city));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-sm text-center space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          <LuSearch
            className="absolute right-3 top-2.5 text-gray-500 text-xl cursor-pointer"
            onClick={handleSearch}
          />
        </div>

        {loading ? (
          <FiLoader className="text-4xl animate-spin mx-auto" />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : data ? (
          <>
            {/* Weather Details */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {data.name}
            </h2>
            <span className="text-sm text-gray-600">{data.sys.country}</span>
            <div className="flex justify-center">
              {getWeatherIcon(data.weather[0].main)}
            </div>
            <p className="text-4xl font-semibold text-gray-800">
              {Math.round(data.main.temp)}°C
            </p>
            <p className="text-lg text-gray-700">
              {data.weather[0].description}
            </p>
            <div className="bg-yellow-50 rounded-xl p-4 flex justify-between items-center text-gray-800">
              <div className="flex flex-col items-center w-1/2">
                <div className="flex items-center gap-1 text-lg font-bold">
                  <WiHumidity className="text-xl" />
                  {data.main.humidity}%
                </div>
                <p className="text-sm text-gray-500">Humidity</p>
              </div>
              <div className="flex flex-col items-center w-1/2">
                <div className="flex items-center gap-1 text-lg font-bold">
                  <FaWind className="text-md" />
                  {(data.wind.speed * 3.6).toFixed(2)} km/h
                </div>
                <p className="text-sm text-gray-500">Wind speed</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Search a city to see the weather.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;

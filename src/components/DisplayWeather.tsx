import { WiDaySunny } from "react-icons/wi";
import { LuSearch } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { IoIosCloud } from "react-icons/io";
import { BsCloudRainFill } from "react-icons/bs";
import { BsCloudFog2Fill } from "react-icons/bs";
import { FiLoader } from "react-icons/fi";
import { TiWeatherPartlySunny } from "react-icons/ti";
const WeatherCard = () => {
  const apiKey = import.meta.env.VITE_APIKEY;
  const url = import.meta.env.VITE_ENDPOINT;
  console.log(apiKey,url);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-sm text-center space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="enter a city"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          <LuSearch className="absolute right-3 top-2.5 text-gray-500 text-xl" />
        </div>

        {/* Location */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Purba Firoz Shah Colony
        </h2>
        <span className="text-sm text-gray-600">BD</span>

        {/* Weather Icon */}
        <div className="flex justify-center">
          <WiDaySunny className="text-yellow-400 text-7xl" />
        </div>

        {/* Temperature */}
        <p className="text-4xl font-semibold text-gray-800">30</p>
        <p className="text-lg text-gray-700">Clear</p>

        {/* Bottom Section */}
        <div className="bg-yellow-50 rounded-xl p-4 flex justify-between items-center text-gray-800">
          {/* Humidity */}
          <div className="flex flex-col items-center w-1/2">
            <div className="flex items-center gap-1 text-lg font-bold">
              <WiHumidity className="text-xl" />
              60%
            </div>
            <p className="text-sm text-gray-500">Humidity</p>
          </div>

          {/* Wind Speed */}
          <div className="flex flex-col items-center w-1/2">
            <div className="flex items-center gap-1 text-lg font-bold">
              <FaWind className="text-md" />
              5.29km/h
            </div>
            <p className="text-sm text-gray-500">Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

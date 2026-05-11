import { useState, useEffect } from 'react';


function App() { 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 
  useEffect(() => {
     const fetchWeather = async () => { 
      try {
         setLoading(true); 
         const response = await fetch( "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true" ); 
         if (!response.ok)
          { 
            return <h2>Failed to fetch weather data</h2>;
          }
          const data = await response.json();
          setWeather(data);
          } 

          catch (err)
           { 
            setError(err.message);
           }
            finally 
           { 
             setLoading(false);
           }
          }; 
          fetchWeather();
         }, []);

          if (loading)
             { 
              return <h2>Loading...</h2>;

              } if (error) { 
                return <h2>Error: {error}</h2>; 
              }

       return (
        <div>
        <h1>Weather Dashboard</h1>

        <h2>Berlin Weather</h2>

        <p>
        Temperature: {weather.current_weather.temperature}°C
        </p>

        <p>
        Wind Speed: {weather.current_weather.windspeed}
        </p>
    </div>
  );
}




export default App

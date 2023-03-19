import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";

function App() {
  const [UserInputLocation, SetLocation] = useState("");
  const handleChange = (event) => {
    SetLocation(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <WeatherForm
          UserInputLocation={UserInputLocation}
          handleChange={handleChange}
        />
        <WeatherList
          items={[{ id: 1, location: "New York City", fahrenheit: 32 }]}
        />
      </div>
    </div>
  );
}

export default App;

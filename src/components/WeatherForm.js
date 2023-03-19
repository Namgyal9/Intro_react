function WeatherForm({ UserInputLocation, handleChange }) {
  return (
    <form className="pb-16 flex gap-x-4">
      <input
        className="border rounded-lg px-3 py-2"
        type="text"
        placeholder="Enter a location"
        value={UserInputLocation}
        onChange={handleChange}
      />
      <button
        className="text-white bg-gray-900 rounded-lg px-3 py-2"
        type="submit"
      >
        Get the Weather
      </button>
    </form>
  );
}
export default WeatherForm;

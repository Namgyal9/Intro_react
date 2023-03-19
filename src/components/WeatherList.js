function WeatherList({ items }) {
  const WeatherItems = items.map((item) => {
    return (
      <div key={item.id} className="border rounded-lg flex justify-between">
        <div>{item.location}</div>
        <div className="text-2xl">{item.fahrenheit}°F</div>
      </div>
    );
  });
  return <div>{WeatherItems}</div>;
}
export default WeatherList;

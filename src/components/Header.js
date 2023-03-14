function Header({ setCount }) {
  return (
    <header className="px-4 py-4 bg-gray-900 text-white flex justify-between">
      <div className="font-bold"> Logo </div>
      <div className="flex gap-x-4 ">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
          className="bg-white text-gray-900 text-3xl font-bold p-3"
        >
          +
        </button>
        <button
          onClick={() => {
            setCount((count) => count - 1);
          }}
          className="bg-white text-gray-900 text-3xl font-bold p-3"
        >
          -
        </button>
      </div>
    </header>
  );
}
export default Header;

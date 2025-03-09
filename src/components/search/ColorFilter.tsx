function ColorFilter() {
  return (
    <div>
      <div className=" mb-6">
        <div className=" flex justify-between items-center my-4">
          <h4 className=" text-xl text-sixthtextColor font-semibold  mr-4">
            Color
          </h4>
          <label
            htmlFor="checkd"
            className=" font-semibold text-base text-secondaryColor"
          >
            {" "}
            <input type="checkbox" name="checkd" id="checked" /> Select all
          </label>
        </div>

        <div className="flex">
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 mr-2 rounded">
            White
          </button>
          <button className="bg-black border border-gray-300 text-white py-2 px-4 mr-2 rounded">
            Black
          </button>
          <button className="bg-blue-500 border border-gray-300 text-white py-2 px-4 mr-2 rounded">
            Blue
          </button>
          <button className="bg-red-500 border border-gray-300 text-white py-2 px-4 rounded">
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorFilter;

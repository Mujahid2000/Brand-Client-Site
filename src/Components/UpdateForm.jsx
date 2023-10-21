



const UpdateForm = () => {
return (
    
    <div>
    <div>
            <form className="bg-white rounded-lg shadow-md p-8 max-w-sm mx-auto space-y-6">
            <h2 className="text-2xl text-center font-semibold text-indigo-600 mb-6">
                Update Product
            </h2>
            <div>
                <label htmlFor="image" className="text-gray-600 text-sm">
                Image
                </label>
                <input
                type="text"
                id="image"
                name="image"
                className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                />
            </div>

            <div>
                <label htmlFor="name" className="text-gray-600 text-sm">
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                />
            </div>

            <div>
                <label htmlFor="brandName" className="text-gray-600 text-sm">
                Brand Name
                </label>
                <input
                type="text"
                id="brandName"
                name="brandName"
                className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                />
            </div>

            <div>
                <label htmlFor="type" className="text-gray-600 text-sm">
                Type
                </label>
                <select
                id="type"
                name="type"
                className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                >
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="headphone">Headphone</option>
                </select>
            </div>

            <div>
                <label htmlFor="price" className="text-gray-600 text-sm">
                Price
                </label>
                <input
                type="text"
                id="price"
                name="price"
                className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                />
            </div>

            <div>
                <label htmlFor="rating" className="text-gray-600 text-sm">
                Rating
                </label>
                <input
                type="text"
                id="rating"
                name="rating"
                className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                />
            </div>

            <div>
                <button
                type="submit"
                className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
                >
                Submit
                </button>
            </div>
            </form>
      </div>
    </div>
  );
};

export default UpdateForm;

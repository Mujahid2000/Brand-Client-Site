import Swal from 'sweetalert2'


const AddProductPage = () => {
    const handleAddProduct = event =>{
        event.preventDefault();


        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        

        const brandData = {
            image, name, brand, type, price, description, rating
        }
        console.log(brandData);

        // send data server

        fetch('http://localhost:5050/carmodel', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brandData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

return (
    
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-md shadow-md bg-gradient-to-r from-green-400 to-blue-500">
        <h1 className="text-2xl font-bold text-center mb-4">Add Product</h1>
        <form onSubmit={handleAddProduct}>
            <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image
            </label>
            <input
                type="text"
                id="image"
                name="image"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                accept="image/*"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Brand Name
            </label>
            <input
                type="text"
                id="brand"
                name="brand"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Category
            </label>
            <select
                id="type"
                name="type"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            >
                <option value="select">Select</option>
                <option value="Sedans">Sedans</option>
                <option value="SUV (Sport Utility Vehicle)">SUV (Sport Utility Vehicle)</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Sports Activity Vehicles (SAVs)">Sports Activity Vehicles (SAVs)</option>
                <option value="Coupe">Coupe</option>
                <option value="Electric Vehicles (EVs)">Electric Vehicles (EVs)</option>
            </select>
            </div>

            <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
            </label>
            <input
                type="text"
                id="price"
                name="price"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Short Description
            </label>
            <textarea
                id="description"
                name="description"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                rows="3"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating
            </label>
            <input
                type="text"
                id="rating"
                name="rating"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            </div>

            <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
            Add
            </button>
        </form>
    </div>
    );
};

export default AddProductPage;





const UpdateForm = () => {
    return (
        <div>
            <div>
        <h2>Add a Product</h2>
        <form>
            <div>
            <label htmlFor="image">Image:</label>
            <input type="file" name="image" id="image" />
            </div>

            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            </div>

            <div>
            <label htmlFor="brand">Brand Name:</label>
            <input type="text" name="brand" id="brand" />
            </div>

            <div>
            <label htmlFor="category">Category:</label>
            <select name="type" id="type">
            <option value="select">Select</option>
                <option value="Sedans">Sedans</option>
                <option value="SUV (Sport Utility Vehicle)">SUV (Sport Utility Vehicle)</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Sports Activity Vehicles (SAVs)">Sports Activity Vehicles (SAVs)</option>
                <option value="Coupe">Coupe</option>
                <option value="Electric Vehicles (EVs)">Electric Vehicles (EVs)</option>
            </select>
            </div>
            
            <div>
            <label htmlFor="price">Price:</label>
            <input type="number" name="price" id="price" />
            </div>

            <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" name="rating" id="rating" step="0.1" min="0" max="5" />
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
    );
};

export default UpdateForm;
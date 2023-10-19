
import { data } from 'autoprefixer';
const AddProducts = () => {
    const handleAddProducts = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.name.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newCar = {
            name, brand, price, rating, description, photo
        }
        console.log(brand);
        fetch('http://localhost:5500/dynamicproducts',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="bg-[#F4F3F0] px-24 py-16">
            <h2 className="text-3xl font-bold">Add Car by Brand Category</h2>
            <form onSubmit={handleAddProducts}>
                {/* name row */}
                <div className="flex bg-[] gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Name &  Model" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select placeholder="Select an option" name="brand" className="input input-bordered w-full">
                                <option value="rolls-royce">Rolls-Royce</option>
                                <option value="bmw">BMW</option>
                                <option value="tesla">Tesla</option>
                                <option value="marcedes">Marcedes-Benz</option>
                                <option value="ford">Ford</option>
                                <option value="ferarri">Ferrari</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* another row */}
                <div className="flex bg-[] gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Car Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Car Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* another row */}
                <div className="flex bg-[] gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Write Short description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" name="Add Coffee" id="" className="btn btn-block bg-[#D2B48C] mt-8" />
            </form>

        </div>
    );
};

export default AddProducts;
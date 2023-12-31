import Swal from "sweetalert2";

const AddProducts = () => {
    const handleAddProducts = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newCar = {
            name, brand, price, rating, description, photo, type
        }
        console.log(brand);
        fetch('https://brand-shop-server-b8-a10.vercel.app/dynamicproducts',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire(
                    'Good job!',
                    'Your Product has been added!',
                    'success'
                  )
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] px-8 lg:px-24 py-16">
            <h2 className="text-3xl font-bold">Add Product by Brand Category</h2>
            <form onSubmit={handleAddProducts}>
                {/* name row */}
                <div className="lg:flex bg-[] gap-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Name &  Model" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
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
                                <option value="ferrari">Ferrari</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* another row */}
                <div className="lg:flex bg-[] gap-5">
                <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Type</span>
                        </label>
                        <label className="input-group">
                            <select type="text" placeholder="Enter Product Type" name="type" className="input input-bordered w-full">
                                <option value='Car'>Car</option>
                                <option value='Truck'>Truck</option>
                                <option value='Motor Vehicle'>Motor Vehicle</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* another row */}
                <div className="lg:flex bg-[] gap-5">
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea rows="8" cols="5"  type="text" placeholder="Write Short description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* another row  */}
                <div className="lg:flex bg-[] gap-5">
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" name="Add" id="" value="Add Product" className="btn btn-block bg-[#D2B48C] mt-8" />
            </form>

        </div>
    );
};

export default AddProducts;
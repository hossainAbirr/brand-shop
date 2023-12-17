
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateProducts = () => {
    const updateSingleCar = useLoaderData();
    const { _id, name, brand, price, rating, type, photo } = updateSingleCar;
    const url = brand.split('-')
    // console.log(url);
    const handleUpdateProducts = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const newCar = {
            name, brand, price, rating, type, photo
        }
        fetch(`https://brand-shop-server-b8-a10.vercel.app/updateproducts/${url[0]}/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire(
                        'Congratulation!',
                        'Product information has been updated!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] px-8 lg:px-24 py-16">
            <h2 className="text-3xl font-bold">Update Product by Brand Category</h2>
            <form onSubmit={handleUpdateProducts}>
                {/* name row */}
                <div className="lg:flex gap-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Name &  Model" defaultValue={name} name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select placeholder="Select an option" name="brand" className="input input-bordered w-full capitalize">
                                <option defaultValue={brand}>{brand}</option>
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
                            <select type="text" placeholder="Enter Product Type" defaultValue={type} name="type" className="input input-bordered w-full">
                                <option defaultValue={type}>{type}</option>
                                <option value='Car'>Car</option>
                                <option value='Truck'>Truck</option>
                                <option value='Motor Vehicle'>Motor Vehicle</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Car Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Price" defaultValue={price} name="price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* another row */}
                <div className="lg:flex bg-[] gap-5">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Car Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Car Rating" defaultValue={rating} name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter URL" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" name="Add Coffee" value="Update Product" id="" className="btn btn-block bg-[#D2B48C] mt-8" />
            </form>

        </div>
    );
};

export default UpdateProducts;
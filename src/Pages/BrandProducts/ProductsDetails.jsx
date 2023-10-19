
import { useLoaderData } from 'react-router-dom';
const ProductsDetails = () => {
    const singleCar = useLoaderData();
    console.log(singleCar);
    return (
        <div className='text-left space-y-5'>
            <img src={singleCar.photo} alt="" />
            <div className='flex justify-between gap-10'>
                <div className='space-y-5'>
                    <h2 className='font-semibold text-xl'>Brand Name : <span className='uppercase text-gray-500 font-bold'>{singleCar.brand}</span> </h2>
                    <h2 className='font-semibold text-xl'>Car Name/Model : <span className='uppercase text-gray-500 font-bold'>{singleCar.name}</span></h2>
                </div>
                <div className='flex-1'>
                    <button className='btn btn-secondary text-white w-full h-full'>Add To Cart</button>
                </div>
            </div>

            <h2 className='text-3xl font-semibold'>Description</h2>

            <p className='text-gray-700 font-medium'>{singleCar.description}</p>
        </div>
    );
};

export default ProductsDetails;
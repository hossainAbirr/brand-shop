
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const ProductsDetails = () => {
    const singleCar = useLoaderData();
    const {name, photo, brand , price, description} = singleCar

    const cartProduct = {name, photo, brand, price}
    const handleAddToCart = () => {
        fetch('https://brand-shop-server-b8-a10.vercel.app/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    Swal.fire(
                        'Well Done!',
                        'Product has been added to your Cart!',
                        'success'
                      )
                }
            })
    }

    return (
        <div className='text-left space-y-5'>
            <img className='w-full' src={photo} alt="" />
            <div className='flex justify-between gap-10'>
                <div className='space-y-5'>
                    <h2 className='font-semibold text-xl'>Brand Name : <span className='uppercase text-gray-500 font-bold'>{brand}</span> </h2>
                    <h2 className='font-semibold text-xl'>Car Name/Model : <span className='uppercase text-gray-500 font-bold'>{name}</span></h2>
                </div>
                <div className='flex-1'>
                    <button onClick={handleAddToCart} className='btn btn-secondary text-white w-full h-full'>Add To Cart</button>
                </div>
            </div>

            <h2 className='text-3xl font-semibold'>Description</h2>

            <p className='text-gray-700 font-medium'>{description}</p>
        </div>
    );
};

export default ProductsDetails;
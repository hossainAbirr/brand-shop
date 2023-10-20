
import { Link } from 'react-router-dom';
const CarCard = ({ car }) => {
    const {_id, photo, name , brand, price, rating,  } = car
    const url = brand.split('-')
    return (
        <div className="card  bg-base-100">
            <figure><img className='h-60 w-full' src={photo} /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{brand}</div>
                </h2>
                <p className='font-semibold'>Price : <span className='text-gray-400'> {price}$</span> </p>
                <p className='text-black font-semibold'>
                    Rating : <span className='text-gray-400'> {rating} out of 5</span>
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"><Link to={`/productsdetails/${url[0]}/${_id}`}>Details</Link></div>
                    <div className="badge badge-outline"><Link to={`/updateproducts/${url[0]}/${_id}`}>Update</Link></div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
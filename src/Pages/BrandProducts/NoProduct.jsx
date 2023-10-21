
import { Link } from 'react-router-dom';
const NoProduct = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h2 className="text-8xl font-bold">No Product Added Yet!</h2>
            <p className='text-2xl mt-5 '>Product will be added soon!</p>
            <button className="btn mt-10"><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default NoProduct;

import { Link } from 'react-router-dom';
const CartError = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h2 className="text-4xl font-bold">You haven&apos;t added any product to your Cart yet!</h2>
            <button className="btn mt-10"><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default CartError;
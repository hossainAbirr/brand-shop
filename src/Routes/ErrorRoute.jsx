
import { Link } from 'react-router-dom';
const ErrorRoute = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className='text-[150px] font-bold'>404!</h1>
            <h3 className="text-3xl font-bold">Oops!</h3>
            <p>Your page was not found!</p>
            <button className="btn mt-5"><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default ErrorRoute;
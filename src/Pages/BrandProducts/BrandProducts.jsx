
import { useLoaderData } from 'react-router-dom';
const BrandProducts = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div>
            <h3>Brand Products</h3>
        </div>
    );
};

export default BrandProducts;
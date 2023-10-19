
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {
    const loadedBrands = useLoaderData();
    console.log(loadedBrands);
    return (
        <div>
            <h2 className="text-4xl font-semibold">This is Home</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                {
                    loadedBrands.map(brand => (
                        <Link key={brand.id} to={`/brandproducts/${brand.url}`}>
                            <div className="card card-compact bg-base-100 shadow-lg">
                                <figure><img className='w-96 h-56' src={brand.logo} alt="Car-Brand-logo" /></figure>
                                <h2 className="card-title ">{brand.brand}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;

import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import AboutUs from '../../components/AboutUs';
import PrivacyPolicy from '../../components/PrivacyPolicy';
const Home = () => {
    const loadedBrands = useLoaderData();
    console.log(loadedBrands);
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='text-4xl font-bold mb-10'>Explore the World of Luxury Cars</h2>
                <p className='mb-10'>Unveil the icons of automotive excellence. Explore a curated selection of renowned car brands, each symbolizing a unique blend of luxury, innovation, and performance. From the timeless elegance of Rolls-Royce to the thrilling precision of Ferrari, discover automotive legends that define the art of driving.</p>
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
            <PrivacyPolicy></PrivacyPolicy>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;
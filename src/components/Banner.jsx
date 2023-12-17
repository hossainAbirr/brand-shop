import banner from '../assets/banner.jpeg'
const Banner = () => {
    return (
        <div className="hero h-[600px] lg:min-h-screen mb-20" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome <br /> to  <br /><span className='text-orange-600'>BrandShop</span></h1>
                    <p className="mb-5 font-semibold">Explore automotive luxury and performance. Discover the world's finest car brands, including BMW, Ferrari, Rolls-Royce, and Mercedes-Benz. Your dream car awaits.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
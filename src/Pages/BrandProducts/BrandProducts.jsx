
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import NoProduct from './NoProduct';
const BrandProducts = () => {
    const loadedData = useLoaderData();
    if(loadedData.length === 0){
        return <NoProduct></NoProduct>
    }
    console.log(loadedData);
    const img1 = loadedData[0]?.photo;
    const img2 = loadedData[1]?.photo;
    const img3 = loadedData[2]?.photo;
    const img4 = loadedData[3]?.photo;
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 bg-base-200 my-20 py-24 px-10'>
                {
                    loadedData?.map(car => <CarCard
                    key={car._id}
                    car={car}
                    ></CarCard>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;
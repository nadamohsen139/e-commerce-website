import exclusive from '../assets/exclusive_image.png';
import arrow from '../assets/arrow.png';

const Offers = () => {
  return (
    <div className="Offers shadow-md bg-gradient-to-b from-yellow-400">
        <div className='flex'>
            <div className="new-info flex-1 flex flex-col gap-8 lg:p-28 p-12">
                <p className='font-semibold lg:text-4xl text-2xl'>Exclusive</p>
                <p className='font-semibold lg:text-4xl text-2xl'>Offers For You</p>
                <p className='font-semibold lg:text-4xl text-2xl'>On Our Best Seller Products</p>
                <button className='font-semibold lg:text-xl text-sm p-4 bg-red-500 rounded-md text-white flex justify-center items-center gap-3 lg:mt-10 transition ease-in-out hover:scale-110 duration-300'>Check Now <img src={arrow} alt="arrow" /></button>
            </div>
            <div className="image lg:flex hidden md:flex">
                <img src={exclusive} alt="exclusive" />
            </div>
        </div>
    </div>
  )
}

export default Offers;
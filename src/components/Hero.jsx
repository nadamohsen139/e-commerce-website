import heroImg from '../assets/hero_image.png';
import arrow from '../assets/arrow.png';
const Hero = () => {
  return (
    <div className="hero shadow-md bg-gradient-to-b from-yellow-400">
        <div className='flex'>
            <div className="new-info flex-1 flex flex-col gap-8 lg:p-28 p-12">
                <h1 className='font-bold lg:text-2xl text-xl pb-5'>NEW ARRIVALS</h1>
                <p className='font-semibold lg:text-6xl text-4xl'>New</p>
                <p className='font-semibold lg:text-6xl text-4xl'>Collections</p>
                <p className='font-semibold lg:text-6xl text-4xl'>For Everyone</p>
                <button className='font-semibold lg:text-xl text-sm p-4 bg-red-500 rounded-md text-white flex justify-center items-center gap-3 transition ease-in-out hover:scale-110 duration-300'>Latest Collection <img src={arrow} alt="arrow" /></button>
            </div>
            <div className="image lg:flex hidden md:flex">
                <img src={heroImg} alt="new collection" />
            </div>
        </div>
    </div>
  )
}

export default Hero;
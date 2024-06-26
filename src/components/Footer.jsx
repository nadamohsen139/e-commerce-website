import footer_image from '../assets/logo_big.png';
import instagram from '../assets/instagram_icon.png';
import pinterest from '../assets/pintester_icon.png';
import whatsapp from '../assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-12 p-7">
        <div className="foot-logo flex items-center gap-5">
            <div className='lg:w-full w-11'>
                <img src={footer_image} alt="footer image" />
            </div>
            <p className='font-bold lg:text-4xl text-xl'>SHOPPER</p>
        </div>
        <ul className='footer-links flex lg:gap-12 gap-6 lg:text-xl text-sm font-semibold'>
            <li className='cursor-pointer transition ease-in-out hover:scale-110 duration-300'>Company</li>
            <li className='cursor-pointer transition ease-in-out hover:scale-110 duration-300'>Products</li>
            <li className='cursor-pointer transition ease-in-out hover:scale-110 duration-300'>Offices</li>
            <li className='cursor-pointer transition ease-in-out hover:scale-110 duration-300'>About</li>
            <li className='cursor-pointer transition ease-in-out hover:scale-110 duration-300'>Contact</li>
        </ul>
        <div className="social-icons flex gap-10">
            <div className="icon cursor-pointer">
                <img src={instagram} alt="instagram" />
            </div>
            <div className="icon cursor-pointer">
                <img src={pinterest} alt="pinterest" />
            </div>
            <div className="icon cursor-pointer">
                <img src={whatsapp} alt="whatsapp" />
            </div>
        </div>
        <div className="copyright lg:text-xl text-sm font-semibold pb-3">
            Copyright @ 2024 - All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer;
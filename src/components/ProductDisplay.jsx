import { useCart } from 'react-use-cart';
import star from '../assets/star_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = (props) => {
  const {loggedIn} = useContext(ShopContext);
  const navigate = useNavigate();
  const { addItem } = useCart();
  const {product} = props;
  return (
    <div className="prod-display p-7 flex flex-col md:flex-row">
      <div className="left-display p-3">
        <div className="main-img lg:w-[340px] w-40">
          <img src={product.image} alt="product image" className='rounded-md' />
        </div>
        <div className="img-list flex flex-wrap lg:flex-nowrap py-5 bg-white rounded-md gap-4">
          <img src={product.image} alt="product image" className='lg:w-20 w-12 rounded-md cursor-pointer' />
          <img src={product.image} alt="product image" className='lg:w-20 w-12 rounded-md cursor-pointer' />
          <img src={product.image} alt="product image" className='lg:w-20 w-12 rounded-md cursor-pointer' />
          <img src={product.image} alt="product image" className='lg:w-20 w-12 rounded-md cursor-pointer' />
        </div>
      </div>
      <div className="right-display">
        <h1 className='font-semibold text-sm lg:text-xl p-2'>{product.name}</h1>
        <div className="stars flex gap-2 p-3">
          <img src={star} alt="star" className='lg:w-[18px] w-3 h-4 lg:h-5' />
          <img src={star} alt="star" className='lg:w-[18px] w-3 h-4 lg:h-5' />
          <img src={star} alt="star" className='lg:w-[18px] w-3 h-4 lg:h-5' />
          <img src={star} alt="star" className='lg:w-[18px] w-3 h-4 lg:h-5' />
          <img src={star} alt="star" className='lg:w-[18px] w-3 h-4 lg:h-5' />
          <p>(122)</p>
        </div>
        <div className="prices p-3 flex gap-16">
          <div className="old-price lg:text-xl text-[16px] line-through text-gray-600">Was {product.old_price}$</div>
          <div className="new-price lg:text-xl text-[16px]">Now {product.price}$</div>
        </div>
        <p className="description p-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel placeat, molestiae iste perferendis adipisci, aliquid assumenda sit voluptate repellendus esse itaque ipsum possimus eum eaque repellat quis maxime facere explicabo.
        </p>
        <div className="size p-3">
          <h2 className='text-center font-semibold lg:text-xl'>Select Your Size</h2>
          <div className="sizes flex gap-5 justify-center items-center p-5">
            <button className='lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600'>S</button>
            <button className='lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600'>M</button>
            <button className='lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600'>XL</button>
            <button className='lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600'>XXL</button>
          </div>
        </div>
        <div className="btn flex items-center justify-center p-4">
        <button onClick={() => {loggedIn ? addItem(product) : navigate('/signup')}} className='lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay;
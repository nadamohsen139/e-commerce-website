import { useContext } from 'react';
import { ShopContext } from './../context/ShopContext';
import dropdown from '../assets/dropdown_icon.png';
import Card from '../components/Card';

const Categories = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="categories p-7">
        <img src={props.banner} alt="banner" />
        <div className="index-sort flex justify-between items-center gap-9 p-7">
          <p><span className='font-semibold'>Showing 1-12</span> Out of 36 Products</p>
          <div className="sort flex justify-center items-center gap-4 lg:p-3 p-2 text-center lg:text-xl text-sm border border-gray-800 rounded-lg">
              <div>Sort By</div>
              <div className="sort-img cursor-pointer">
              <img src={dropdown} alt="dropdown" />
              </div>
            </div>
        </div>
        <div className="products">
          {all_product.map((item, index) => {
            if(props.category === item.category) {
              return <Card key={index}
              item={item}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price ={item.price}
              old_price ={item.old_price} />
            } else {
              return null;
            }
          })}
        </div>
    </div>
  )
}

export default Categories;
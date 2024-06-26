
import data_product from './../assets/data';
import Card from './Card';

const Popular = () => {
  return (
    <div className="popular p-7 mt-10">
        <h2 className='font-bold text-2xl lg:text-4xl pb-8'>Popular At Women Branch</h2>
        <div className="popular-card">
            {data_product.map((item, index) => (
                <Card key={index}
                item={item}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price ={item.price}
                old_price ={item.old_price} />
            ))}
        </div>
    </div>
  )
}

export default Popular;
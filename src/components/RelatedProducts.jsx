
import all_product from './../assets/all_product';
import Card from './Card';

const RelatedProducts = () => {
  return (
    <div className="relate p-7">
        <h2 className='font-semibold text-xl lg:text-2xl p-3 pb-5'>Related Products</h2>
        <div className="items">
        {all_product.map((it, index) => (
                <Card key={index}
                id={it.id}
                name={it.name}
                image={it.image}
                new_price ={it.new_price}
                old_price ={it.old_price} />
            ))}
          ))}
        </div>
    </div>
  )
}

export default RelatedProducts
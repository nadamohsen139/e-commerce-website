import new_collections from './../assets/new_collections';
import Card from './Card';

const NewCollection = () => {
  return (
    <div className="new-collection p-7 mt-10">
        <h1 className='font-bold text-2xl lg:text-4xl pb-8'>New Collection</h1>
        <div className="collection">
            {new_collections.map((item, index) => (
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

export default NewCollection;
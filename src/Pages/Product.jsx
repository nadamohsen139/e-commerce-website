import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import ProductDisplay from './../components/ProductDisplay';
import DescripBox from '../components/DescripBox';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescripBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product;
import arrow from '../assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';
const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className="bread-crum flex flex-wrap md:justify-center justify-start items-center font-semibold gap-5 p-4 text-sm lg:text-xl">
        <Link to={'/'}>Main</Link><img src={arrow} alt="arrow" />
        <Link to={`/${product.category}`}>{product.category}</Link><img src={arrow} alt="arrow" />
        {product.name}
    </div>
  )
}

export default BreadCrum;
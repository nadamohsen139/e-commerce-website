import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ShopContext } from "../context/ShopContext";

const Card = (props) => {
  const { loggedIn } = useContext(ShopContext);
  const navigate = useNavigate();
  const { addItem } = useCart();

  return (
    <div className="card p-3 bg-white rounded-lg transition ease-in-out hover:scale-110 duration-300">
      <Link to={`/product/${props.id}`}>
        <div className="hold">
          <img
            src={props.image}
            alt="product image"
            className="rounded-lg w-full"
            onClick={window.scrollTo(0, 0)}
          />
        </div>
        <div className="details px-2">
          <p className="my-2">{props.name}</p>
          <div className="prices flex justify-between items-center w-full">
            <div className="old-price text-gray-400 text-[18px] font-medium line-through">
              {props.old_price}
            </div>
            <div className="new-price text-gray-600 text-[18px] font-semibold">
              {props.new_price}
            </div>
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          loggedIn ? addItem(props.item) : navigate("/signup");
        }}
        className="add-btn lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600 m-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Card;

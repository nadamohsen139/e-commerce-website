import { useCart } from "react-use-cart";

const CartItmes = () => {
  const {
    isEmpty,
    totalUniqueItems,
    emptyCart,
    cartTotal,
    totalItems,
    updateItemQuantity,
    removeItem,
  } = useCart();

    const cartData = localStorage.getItem("react-use-cart");
    const parsed = cartData ? JSON.parse(cartData) : null;

  if (isEmpty)
    return (
      <h1 className="text-center text-xl lg:text-2xl font-semibold p-40">
        Your Cart Is Empty
      </h1>
    );

  return (
    <div className="cart-items p-7">
      {parsed ? (
        <div className="main flex justify-center items-center gap-4 p-4">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Cart ({totalUniqueItems})
          </h2>
          <h2 className="text-xl lg:text-3xl font-semibold">
            Total Items ({totalItems})
          </h2>
        </div>
      ) : null}
      {parsed ? (
        <div className="chosen-items p-5">
          {parsed.items.map((item, index) => (
            <div className="item  p-3 bg-white rounded-lg" key={index}>
              <div>
                <img src={item.image} alt="item image" className="rounded-lg w-full" />
              </div>
              <div className="data">
                <div className="p-2">{item.name}</div>
                <div className="text-center font-semibold">
                  Price: {item.price}
                </div>
                <div className="text-center font-semibold">
                  Quantity: {item.quantity}
                </div>
              </div>
              <div className="btns flex justify-center items-center">
                <button
                  className="lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600 m-2"
                  onClick={() => {
                    updateItemQuantity(item.id, item.quantity + 1);
                    console.log('item is added');
                  }}
                >
                  +
                </button>
                <button
                  className="lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600 m-2"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-gray-600 m-2"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-xl lg:text-2xl font-semibold p-40">
          Your Cart Is Empty
        </h1>
      )}
      {parsed ? (
        <div className="total-price flex gap-4 justify-center items-center">
          <h3 className="font-semibold">Total Price : {cartTotal}</h3>
          <button
            className="lg:text-[16px] text-sm p-2 border border-gray-700 rounded-md active:text-white active:bg-red-600 m-2"
            onClick={() => emptyCart()}
          >
            Empty Cart
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CartItmes;

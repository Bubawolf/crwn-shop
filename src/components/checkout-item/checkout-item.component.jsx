import "./checkout-item.styles.scss";
import { ToogleCartContext } from "../../context/toogle-cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(ToogleCartContext);
  const removeProductFromCart = () => removeItemFromCart(cartItem);
  const additem = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeProductFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={additem}>
          &#10095;
        </div>
      </span>

      <span className="price" className="price">
        ${price}
      </span>
      <div
        className="remove-button"
        onClick={() => deleteItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

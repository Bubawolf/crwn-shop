import {
  Price,
  Quantity,
  Name,
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";
import { ToogleCartContext } from "../../context/toogle-cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(ToogleCartContext);
  const removeProductFromCart = () => removeItemFromCart(cartItem);
  const additem = () => addItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <div className="arrow" onClick={removeProductFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={additem}>
          &#10095;
        </div>
      </Quantity>

      <Price>${price}</Price>
      <RemoveButton onClick={() => deleteItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

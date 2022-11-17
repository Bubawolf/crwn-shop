import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { ToogleCartContext } from "../../context/toogle-cart.context";

const CartIcon = () => {
  const { toggleCart, setToggleCart } = useContext(ToogleCartContext);
  const { cartItems } = useContext(ToogleCartContext);

  const finalQuantity = cartItems
    .map((item) => item.quantity)
    .reduce((acc, cur) => acc + cur, 0);
  //console.log(finalQuantity, "here is the quantity");

  const toogleIsCartOpen = () => setToggleCart(!toggleCart);
  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{finalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
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
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{finalQuantity}</span>
    </div>
  );
};

export default CartIcon;

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { ToogleCartContext } from "../../context/toogle-cart.context";

const CartIcon = () => {
  const { toggleCart, setToggleCart } = useContext(ToogleCartContext);
  const toogleIsCartOpen = () => setToggleCart(!toggleCart);
  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

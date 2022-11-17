import {
  ProductCardContainer,
  Price,
  Name,
  Footer,
} from "./product-card.styles";
import { useContext } from "react";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { ToogleCartContext } from "../../context/toogle-cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(ToogleCartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer className="footer">
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

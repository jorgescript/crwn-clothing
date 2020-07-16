import React from "react";
/* react-redux */
import { connect } from "react-redux";
/* actions */
import { addItem } from "./../../redux/cart/cart.actions";
/* componentes */
import CustomButton from "./../custom-button/custom-button.component";
/* estilos */
import {
  CollectionItemContainer,
  CollectionItemBGImage,
  CollectionItemButton,
  ColletionItemFooter,
  CollectionItemName,
  CollectionItemPrice,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemBGImage
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ColletionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </ColletionItemFooter>
      <CollectionItemButton inverted onClick={() => addItem(item)}>
        ADD TO CARD
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

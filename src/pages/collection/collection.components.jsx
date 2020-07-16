import React from "react";
/* react-redux */
import { connect } from "react-redux";
/* reselect */
import { selectCollection } from "./../../redux/shop/shop.selectors";
/* componentes */
import CollectionItem from "../../components/collection-item/collection-item.component";
/* estilos */
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapSatetoProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapSatetoProps)(CollectionPage);

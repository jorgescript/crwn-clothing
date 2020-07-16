import React from "react";
/* react-redux */
import { connect } from "react-redux";
/* reselect */
import { selectCollection } from "./../../redux/shop/shop.selectors";
/* componentes */
import CollectionItem from "../../components/collection-item/collection-item.component";
/* estilos */
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapSatetoProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapSatetoProps)(CollectionPage);

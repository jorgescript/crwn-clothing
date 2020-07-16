import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsOverview } from "./../../redux/shop/shop.selectors";
/* componentes */
import CollectionPreview from "./../collection-preview/collection-preview.component";
/* estilos */
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsOverview,
});
export default connect(mapStateToProps)(CollectionsOverview);

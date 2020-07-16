import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsOverview } from "./../../redux/shop/shop.selectors";
/* componentes */
import CollectionPreview from "./../collection-preview/collection-preview.component";
/* estilos */
import { CollectionOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsOverview,
});
export default connect(mapStateToProps)(CollectionsOverview);

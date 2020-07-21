/* react-redux */
import { connect } from "react-redux";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "./../../redux/shop/shop.selectors";
/* redux */
import { compose } from "redux";
/* componentes */
import WithSpinner from "./../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.components";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

/* react-redux */
import { connect } from "react-redux";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "./../../redux/shop/shop.selectors";
/* redux */
import { compose } from "redux";
/* componentes */
import WithSpinner from "./../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStetToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStetToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

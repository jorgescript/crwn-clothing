import React from "react";
/* react-router-dom */
import { Route } from "react-router-dom";
/* react-redux */
import { connect } from "react-redux";
/* actions */
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";
/* componentes */
import CollectionsOverviewContainer from "./../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "./../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

import React from "react";
/* reac-redux */
import { connect } from "react-redux";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectDirectoySections } from "./../../redux/directory/directory.selectors";
/* componentes */
import MenuItem from "./../menu-item/menu-item.component";
/* estilos */
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoySections,
});

export default connect(mapStateToProps)(Directory);

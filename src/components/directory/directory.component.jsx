import React from "react";
/* reac-redux */
import { connect } from "react-redux";
/* reselect */
import { createStructuredSelector } from "reselect";
import { selectDirectoySections } from "./../../redux/directory/directory.selectors";
/* componentes */
import MenuItem from "./../menu-item/menu-item.component";
/* estilos */
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoySections,
});

export default connect(mapStateToProps)(Directory);

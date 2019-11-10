import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const DescriptionIcon = ({ showDescription, setShowDescription }) => {
  return showDescription ? (
    <KeyboardArrowDownIcon onClick={() => setShowDescription(false)} />
  ) : (
    <KeyboardArrowRightIcon onClick={() => setShowDescription(true)} />
  );
};

export default DescriptionIcon;

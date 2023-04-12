import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

UserInput.propTypes = {
  label: PropTypes.string.isRequired,
};

function UserInput(props) {
  return <TextField {...props} variant="outlined" />;
}

export default UserInput;

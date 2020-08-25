import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../components/TextField/TextField'

function RFTextField(props) {
  const {
    autoComplete,
    InputProps,
    error,
    ...other
  } = props;

  return (
    <TextField
      error={Boolean(error)}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={error}
    />
  );
}

RFTextField.propTypes = {
  autoComplete: PropTypes.string,
  InputProps: PropTypes.object
};

export default RFTextField;
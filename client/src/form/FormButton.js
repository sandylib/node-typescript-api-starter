import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button/Button';

function FormButton(props) {
  const { disabled, ...others } = props;
  return <Button disabled={ disabled} type="submit" variant="contained" {...others} />;
}

FormButton.propTypes = {
  disabled: PropTypes.bool
};

export default FormButton;
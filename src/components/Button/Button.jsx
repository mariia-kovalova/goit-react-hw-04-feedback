import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ option, onLeaveFeedback }) => {
  return (
    <StyledButton type="button" name={option} onClick={onLeaveFeedback}>
      {option}
    </StyledButton>
  );
};

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

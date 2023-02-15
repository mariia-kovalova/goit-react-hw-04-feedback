import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

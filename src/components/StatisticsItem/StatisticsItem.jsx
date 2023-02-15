import PropTypes from 'prop-types';
import { capitalize } from 'utils/capitalize';

export const StatisticsItem = ({ label, value }) => {
  return (
    <li>
      <span>{capitalize(label)}</span>: <span>{value}</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

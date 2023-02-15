import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const optionsData = {
    good,
    neutral,
    bad,
    total,
  };
  return (
    <List>
      {Object.entries(optionsData).map(([label, value]) => (
        <StatisticsItem key={label} label={label} value={value} />
      ))}
      <StatisticsItem label="Positive feedback" value={positivePercentage} />
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

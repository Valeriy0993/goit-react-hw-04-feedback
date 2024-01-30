import styles from './feedback.module.css';

const handleFeedback = (prevState, option) => {
  return {
    ...prevState,
    [option]: prevState[option] + 1,
  };
};

const countTotalFeedback = state => {
  const { Good, Neutral, Bad } = state;
  return Good + Neutral + Bad;
};

const countPositiveFeedbackPercentage = state => {
  const total = countTotalFeedback(state);
  return total === 0 ? 0 : Math.round((state.Good / total) * 100);
};

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export {
  handleFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  Notification,
  Section,
};

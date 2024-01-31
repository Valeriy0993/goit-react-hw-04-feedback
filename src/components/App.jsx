import React, { useState } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import {
  handleFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  Notification,
  Section,
} from './Feedback/TotalPositiveFeedback';

import styles from './Feedback/feedback.module.css';

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });
  const handleFeedbackClick = option => {
    setFeedbackState(prevState => handleFeedback(prevState, option));
  };

  const options = Object.keys(feedbackState);

  const totalFeedback = countTotalFeedback(feedbackState);
  const positivePercentage = countPositiveFeedbackPercentage(feedbackState);

  return (
    <div className={styles.container}>
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={feedbackState.Good}
            neutral={feedbackState.Neutral}
            bad={feedbackState.Bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;

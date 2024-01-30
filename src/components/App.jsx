import React, { Component } from 'react';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      Good: 0,
      Neutral: 0,
      Bad: 0,
    };
  }

  handleFeedback = option => {
    this.setState(prevState => handleFeedback(prevState, option));
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);

    return (
      <div className={styles.container}>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

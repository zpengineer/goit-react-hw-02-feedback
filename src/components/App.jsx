import React, { Component } from 'react';
import Section from './Section/Section';
import Container from './Container/Container';
import Feedback from './Feedback/Feedback';
import Controls from './Controls/Controls';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const currentBtn = e.target.value;

    this.setState(prevState => {
      return {
        [currentBtn]: prevState[currentBtn] + 1,
      };
    });
  };

  countTotalFeedback() {
    const feedbackValues = Object.values(this.state);
    return feedbackValues.reduce((prevValue, num) => prevValue + num, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    const positiveFeedback = (good / total) * 100;
    return Math.round(positiveFeedback);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackKey = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <Container>
        <h1>Please leave feedback</h1>
        <Section>
          <Controls keys={feedbackKey} onIncrement={this.handleFeedback} />
        </Section>

        <h2>Statistic</h2>
        <Section>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Feedback
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;

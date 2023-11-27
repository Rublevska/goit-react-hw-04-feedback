import { FeedbackButtomList, FeedbackButtom } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackButtomList>
    {options.map(option => (
      <FeedbackButtom onClick={() => onLeaveFeedback(option)} key={option}>
        {option}
      </FeedbackButtom>
    ))}
  </FeedbackButtomList>
);

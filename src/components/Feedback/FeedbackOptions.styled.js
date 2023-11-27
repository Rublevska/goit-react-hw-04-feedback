import styled from 'styled-components';

export const FeedbackButtomList = styled.div`
  display: flex;
  gap: ${p => p.theme.spasing(2)};
`;

export const FeedbackButtom = styled.button`
  width: 76px;
  padding-top: ${p => p.theme.spasing(1)};
  padding-bottom: ${p => p.theme.spasing(1)};
  border-radius: ${p => p.theme.radii.sd};
  border: 1px solid ${p => p.theme.colors.borderColor};
  background-color: ${p => p.theme.colors.bottomColor};
  text-transform: capitalize;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.bottomAccentColor};
  }
`;

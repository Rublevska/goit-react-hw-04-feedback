import styled from 'styled-components';

export const SectionGroup = styled.section`
  padding: ${p => p.theme.spasing(5)};
  color: ${p => p.theme.colors.mainTextColor};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spasing(5)};
`;

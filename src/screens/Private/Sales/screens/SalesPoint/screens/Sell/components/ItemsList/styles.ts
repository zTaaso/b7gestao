import styled from 'styled-components/native';

export const StyledItemsList = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
}))``;

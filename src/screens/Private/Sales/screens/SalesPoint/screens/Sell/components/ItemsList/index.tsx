import React from 'react';

import { StyledItemsList } from './styles';

const ItemsList: React.FC = ({ children, ...props }) => (
  <StyledItemsList {...props}>{children}</StyledItemsList>
);

export default ItemsList;

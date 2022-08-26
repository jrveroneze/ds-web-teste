import React from 'react';

// Styles
import { Container } from './styles';

// Interface
interface Props {
  children: React.ReactNode;
}

export function Caption({ children }: Props) {
  return <Container>{children}</Container>;
}

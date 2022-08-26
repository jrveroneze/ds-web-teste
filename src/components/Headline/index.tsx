import React from 'react';

// Styles
import { Container } from './styles';

// Interface
interface Props {
  children: React.ReactNode;
}

export function Headline({ children }: Props) {
  return <Container>{children}</Container>;
}

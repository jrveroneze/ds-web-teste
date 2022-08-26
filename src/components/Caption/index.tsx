import React from 'react';

// Styles
import { Container } from './styles';

// Interface
interface Props {
  children: React.ReactNode;
  error?: boolean;
}

export function Caption({ children, error }: Props) {
  return <Container error={error}>{children}</Container>;
}

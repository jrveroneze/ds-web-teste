import React from 'react';

// Styles
import { Container } from './styles';

// Interface
interface Props {
  children: React.ReactNode;
  type: 'normal' | 'highlight';
}

export function Paragraph({ children, type }: Props) {
  return <Container type={type}>{children}</Container>;
}

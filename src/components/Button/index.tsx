import React, { ButtonHTMLAttributes } from 'react';

// Styles
import { Container } from './styles';

// Interface
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

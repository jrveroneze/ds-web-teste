import React, { InputHTMLAttributes } from 'react';

// Components
import { Caption } from '../Caption';
import { Paragraph } from '../Paragraph';

// Styles
import { Container } from './styles';

// Interface
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper: string;
}

export function Input({ label, helper, ...props }: Props) {
  return (
    <>
      <Paragraph type="highlight">{label}</Paragraph>
      <Container {...props} />
      <Caption>{helper}</Caption>
    </>
  );
}

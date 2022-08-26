import React, { InputHTMLAttributes } from 'react';

// Components
import { Caption } from '../Caption';
import { Paragraph } from '../Paragraph';

// Styles
import { Container } from './styles';

// Interface
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string;
  error?: boolean;
}

export function Input({ label, helper, error, ...props }: Props) {
  return (
    <>
      <Paragraph type="highlight">{label}</Paragraph>
      <Container error={error} {...props} />
      {helper && <Caption error={error}>{helper}</Caption>}
    </>
  );
}

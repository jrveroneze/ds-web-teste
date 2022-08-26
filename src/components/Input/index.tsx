import React, { InputHTMLAttributes } from 'react';

// Components
import { Caption } from '../Caption';
import { Paragraph } from '../Paragraph';

// Styles
import { Container } from './styles';

// Interface
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputSetValue?: any;
  helper?: string;
  error?: boolean;
}

export function Input({
  label,
  helper,
  inputSetValue,
  error,
  ...props
}: Props) {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputSetValue(event.target.value);
  };
  return (
    <>
      <Paragraph type="highlight">{label}</Paragraph>
      <Container error={error} onChange={inputHandler} {...props} />
      {helper && <Caption error={error}>{helper}</Caption>}
    </>
  );
}

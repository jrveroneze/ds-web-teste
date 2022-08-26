import React, { ImgHTMLAttributes } from 'react';

// Styles
import { Container, Image } from './styles';

// Interface
interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export function Logo({ ...props }: Props) {
  return (
    <Container>
      <Image {...props} />
    </Container>
  );
}

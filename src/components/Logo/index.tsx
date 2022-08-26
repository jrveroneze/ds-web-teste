import React, { ImgHTMLAttributes } from 'react';

// Styles
import { Container, Image } from './styles';

// Interface
interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Logo({ ...props }: LogoProps) {
  return (
    <Container>
      <Image {...props} />
    </Container>
  );
}

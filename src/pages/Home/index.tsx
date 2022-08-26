import React from 'react';

// Components
import { Logo } from '../../components/Logo';
import { Caption } from '../../components/Caption';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Headline } from '../../components/Headline';

// Assets
import Carrefour from '../../assets/carrefour-solucoes-financeiras.svg';

// Styles
import {
  Main,
  Container,
  BoxLogo,
  BoxTitle,
  BoxForm,
  BoxInput,
  BoxButton,
  Footer,
} from './styles';

const Home: React.FC = () => {
  return (
    <Main>
      <Container>
        <BoxLogo>
          <Logo src={Carrefour} alt="Carrefour Soluções Financeiras" />
        </BoxLogo>

        <BoxTitle>
          <Headline>Informe seus dados</Headline>
        </BoxTitle>

        <BoxForm>
          <BoxInput>
            <Input
              type="tel"
              label="Número do celular"
              placeholder="(xx) 0000-0000"
            />
          </BoxInput>

          <BoxInput>
            <Input
              type="text"
              label="Seu CPF"
              helper="Teste"
              placeholder="000.000.000-00"
            />
          </BoxInput>

          <BoxInput>
            <Input
              type="email"
              label="Seu e-mail"
              placeholder="email@email.com"
            />
          </BoxInput>
        </BoxForm>

        <BoxButton>
          <Button>Próximo</Button>
        </BoxButton>
      </Container>
      <Footer>
        <Caption>
          © 2021 Banco CSF S.A. CNPJ 08.357.240/0001-50 Av. Doutor Chucri
          Zaidan, 296 - 19º andar - Vila Cordeiro, São Paulo - SP, 04.583-110
        </Caption>
      </Footer>
    </Main>
  );
};
export default Home;

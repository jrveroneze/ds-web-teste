import React from 'react';

// Components
import { Logo } from '../../components/Logo';
import { Caption } from '../../components/Caption';

// Assets
import Carrefour from '../../assets/carrefour-solucoes-financeiras.svg';

// Styles
import { Main, Container, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <Main>
      <Container>
        <Logo src={Carrefour} alt="Carrefour Soluções Financeiras" />
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

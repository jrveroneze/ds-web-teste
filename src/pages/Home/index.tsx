import React, { useState, useEffect } from 'react';

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
  const [phone, setPhone] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [CPFError, setCPFError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    // Validação de email
    email
      ? /\S+@\S+\.\S+/.test(email)
        ? setEmailError('')
        : setEmailError('E-mail inválido')
      : setEmailError('E-mail obrigatório');

    // Validação de formato de CPF
    CPF
      ? /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(CPF)
        ? setCPFError('')
        : setCPFError('CPF em formato inválido')
      : setCPFError('CPF obrigatório');

    // Validação de telefone
    phone
      ? /^\+?\s*\(\d{2}\)?\s*\d{4,5}?\d{4}$/g.test(phone)
        ? setPhoneError('')
        : setPhoneError('Celular inválido')
      : setPhoneError('Celular obrigatório');

    // Validação do botão
    (phoneError === '' ? true : false) &&
    (CPFError === '' ? true : false) &&
    (emailError === '' ? true : false)
      ? setDisableButton(false)
      : setDisableButton(true);
  }, [phone, phoneError, CPF, CPFError, email, emailError]);

  const handleButton = () => {
    const data = {
      telefone: phone,
      cpf: CPF,
      email: email,
    };

    console.log(data);
  };

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
              inputSetValue={setPhone}
              helper={phoneError}
              placeholder="(xx) 0000-0000"
              error={phoneError === '' ? false : true}
            />
          </BoxInput>

          <BoxInput>
            <Input
              type="text"
              label="Seu CPF"
              inputSetValue={setCPF}
              helper={CPFError}
              placeholder="000.000.000-00"
              error={CPFError === '' ? false : true}
            />
          </BoxInput>

          <BoxInput>
            <Input
              type="email"
              label="Seu e-mail"
              inputSetValue={setEmail}
              helper={emailError}
              placeholder="email@email.com"
              error={emailError === '' ? false : true}
            />
          </BoxInput>
        </BoxForm>

        <BoxButton>
          <Button disabled={disableButton} onClick={handleButton}>
            Próximo
          </Button>
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

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { Container, Title, Form, Label, Input, Btn } from './LoginView.styled';

export const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputId = uuidv4();
  const passwordInputId = uuidv4();

  const handleFormChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    dispatch(authOperations.logIn(user));

    // if (data.find(item => item.email === email)) {
    //   alert(`${email + ' is already registered'}`);
    //   return;
    // }
    // createUser(newUser);

    formReset();
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <Title>Login page</Title>
      <Form onSubmit={handleOnSubmit}>
        <Label htmlFor={emailInputId}>
          Email
          <Input
            type="email"
            placeholder="xxxxxx@xxxx.xxx"
            name="email"
            value={email}
            // pattern="/\S+@\S+\.\S+/"
            title="Адрес электронной почты должен состоять из букв, цифр, может содержать тире и не может содержать пробелы, круглые скобки, или начинаться с +. Например mr.adams-jacobs@gmail.com"
            required
            onChange={handleFormChange}
            id={emailInputId}
          />
        </Label>

        <Label htmlFor={passwordInputId}>
          Password
          <Input
            type="password"
            placeholder="*******"
            name="password"
            value={password}
            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            title="Пароль должен состоять из больших, или маленьких букв и цифр, не может содержать тире,  пробелы, круглые скобки, или начинаться с +."
            required
            onChange={handleFormChange}
            id={passwordInputId}
          />
        </Label>

        <Btn type="submit">Log in</Btn>
      </Form>
    </Container>
  );
};

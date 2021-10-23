import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useCreateUserMutation } from '../../redux/auth/auth-slice';
import * as authOperations from '../../redux/auth/auth-operations';

import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Btn,
} from './RegisterView.styled';

export const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [createUser, { data, error }] = useCreateUserMutation();

  const nameInputId = uuidv4();
  const emailInputId = uuidv4();
  const passwordInputId = uuidv4();

  const handleFormChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(authOperations.signup(newUser));

    // if (data.find(item => item.email === email)) {
    //   alert(`${email + ' is already registered'}`);
    //   return;
    // }
    // createUser(newUser);

    formReset();
  };

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Register page</Title>
      <Form onSubmit={handleOnSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            placeholder="Mark Zuckerberg"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleFormChange}
            id={nameInputId}
          />
        </Label>

        <Label htmlFor={emailInputId}>
          Email
          <Input
            type="email"
            placeholder="xxxxxx@xxxx.xxx"
            name="email"
            value={email}
            // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
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

        <Btn type="submit">Add user</Btn>
      </Form>
    </Container>
  );
};

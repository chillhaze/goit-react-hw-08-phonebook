import { useEffect } from 'react';
import { Overlay, FormWrapper } from './FormModal.styled';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';
//--------------------------
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const FormModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleFormChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    // Вешаю слушателя
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Снимаю слуашателя
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleOnSubmit = e => {
    e.preventDefault();

    dispatch(contactsOperations.createContact({ name, number }));
    dispatch(contactsOperations.getAllContacts());

    formReset();
    onClose();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  // Метод закрытия модального окна по кнопке Esc
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // Метод закрытия модального окна по бекдропу
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <FormWrapper>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              // sx={{
              //   color: 'black',
              // }}
            >
              Add new contact
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleOnSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  // sm={6}
                >
                  <TextField
                    required
                    fullWidth
                    autoFocus
                    autoComplete="given-name"
                    placeholder="Mark Zuckerberg"
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleFormChange}
                    id={nameInputId}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    autoComplete="number"
                    placeholder="xxx-xx-xx"
                    label="Number"
                    type="number"
                    name="number"
                    value={number}
                    onChange={handleFormChange}
                    id={numberInputId}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, p: 1.5 }}
              >
                <FaPlus />
              </Button>
            </Box>
          </Box>
        </Container>
      </FormWrapper>
    </Overlay>
  );
};

export default FormModal;

// <Container component="main">
//   <CssBaseline />
//   <Box
//     component="form"
//     sx={{
//       '& > :not(style)': { m: 1, width: '25ch' },
//     }}
//     onSubmit={handleOnSubmit}
//   >
//     <TextField
//       label="Name"
//       variant="outlined"
//       type="text"
//       placeholder="Mark Zuckerberg"
//       name="name"
//       value={name}
//       required
//       onChange={handleFormChange}
//       id={nameInputId}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//     />
//     <TextField
//       label="Number"
//       variant="outlined"
//       type="number"
//       placeholder="xxx-xx-xx"
//       name="number"
//       value={number}
//       required
//       onChange={handleFormChange}
//       id={numberInputId}
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//     />
//     <Button variant="contained" type="submit" style={{ padding: 20 }}>
//       <FaPlus />
//     </Button>
//   </Box>
// </Container>;

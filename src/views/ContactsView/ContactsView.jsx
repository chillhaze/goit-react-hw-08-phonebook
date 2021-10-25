import Filter from '../../components/Contacts/Filter/Filter';
import FormModal from '../../components/FormModal/FormModal';
import ContactList from '../../components/Contacts/ContactList/ContactList';
import { IoMdContacts } from 'react-icons/io';
import { Container, SubTitle } from './ContactsView.styled';
import { useState } from 'react';
//-----------------------
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
//---------------------------
// import { useGetAllContactsQuery } from '../../redux/contacts/contacts-slice';

const ContactsView = () => {
  // const { data, error, isFetching } = useGetAllContactsQuery('');
  const [showModal, setShowModal] = useState(false);

  const handleMmodalClose = () => {
    setShowModal(false);
  };

  return (
    <CssBaseline>
      {/* {error && <Title>{error.status} Not Found</Title>} */}

      <Container>
        {showModal && <FormModal onClose={handleMmodalClose} />}

        <Button
          onClick={() => setShowModal(true)}
          variant="contained"
          sx={{ pt: 1, pb: 1 }}
        >
          Add new contact
        </Button>
        <Filter />

        <SubTitle>
          Contacts
          <IoMdContacts style={{ marginLeft: '3' }} />
        </SubTitle>
        <ContactList />
      </Container>
    </CssBaseline>
  );
};

export default ContactsView;

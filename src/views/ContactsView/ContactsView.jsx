import * as authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import ContactForm from '../../components/Contacts/ContactForm/ContactForm';
import Filter from '../../components/Contacts/Filter/Filter';
import ContactList from '../../components/Contacts/ContactList/ContactList';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import { Container, Title, SubTitle } from './ContactsView.styled';

// import { useGetAllContactsQuery } from '../../redux/contacts/contacts-slice';

export const ContactsView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const { data, error, isFetching } = useGetAllContactsQuery('');

  return (
    <div>
      <>
        {/* {error && <Title>{error.status} Not Found</Title>} */}

        {isLoggedIn && (
          <Container>
            <Title>
              Phonebook <RiContactsBook2Fill style={{ marginLeft: '3' }} />
            </Title>
            <ContactForm />
            <Filter />
            <SubTitle>
              Contacts
              <IoMdContacts style={{ marginLeft: '3' }} />
            </SubTitle>
            <ContactList />
          </Container>
        )}
      </>
    </div>
  );
};

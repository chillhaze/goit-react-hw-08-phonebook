import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFiltered, getAllContacts } from 'redux/contacts/contacts-selectors';
// import { useGetAllContactsQuery } from 'redux/contacts/contacts-slice';
import { Container, List } from './ContactList.styled';

import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);
  const contacts = useSelector(getAllContacts);

  useEffect(() => {
    dispatch(contactsOperations.getAllContacts());
  }, [dispatch]);

  // const { data } = useGetAllContactsQuery('');

  // const filteredContacts = contacts.filter(item =>
  //   item.name.toLowerCase().includes(filtered.toLowerCase()),
  // );

  return (
    <Container>
      {contacts && (
        <List>
          {contacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </List>
      )}
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnPush: PropTypes.func,
};

export default ContactList;

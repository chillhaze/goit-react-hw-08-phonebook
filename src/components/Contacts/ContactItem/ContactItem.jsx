import PropTypes from 'prop-types';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { ListItem, Name, Number, BtnDelete } from './ContactItem.styled';
// ----------------------------------- Icons
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
// ----------------------------------- MUI
import Button from '@mui/material/Button';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    //contacts to delete id
    dispatch(contactsOperations.deleteContact(id));
    //get updated contacts
    dispatch(contactsOperations.getAllContacts());
    return;
  };

  return (
    <Button
      type="button"
      variant="outlined"
      sx={{ m: 1, p: 0.5, boxShadow: '1px 3px 10px -4px #050505' }}
    >
      <ListItem>
        <Name>
          <IoIosContact style={{ paddingTop: '2', marginRight: '5' }} />
          {name}:
        </Name>

        <Number>
          <AiFillPhone style={{ paddingTop: '2', marginRight: '5' }} />
          {number}
        </Number>
        <BtnDelete type="button" onClick={handleDeleteContact}>
          <FaTrashAlt style={{ width: '15' }} />
        </BtnDelete>
      </ListItem>
    </Button>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteBtnPush: PropTypes.func,
};

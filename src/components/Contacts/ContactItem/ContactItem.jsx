import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import Loader from 'react-loader-spinner';
// import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import { ListItem, Name, Number, BtnDelete } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';

export const ContactItem = ({ id, name, number }) => {
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleDeleteContact = () => {
    dispatch(contactsOperations.deleteContact(id));
    dispatch(contactsOperations.getAllContacts());
    return;
  };
  const dispatch = useDispatch();

  const a = false;
  return (
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
        {a ? (
          <Loader type="TailSpin" color="teal" height={16} width={16} />
        ) : (
          <FaTrashAlt style={{ width: '15' }} />
        )}
      </BtnDelete>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteBtnPush: PropTypes.func,
};

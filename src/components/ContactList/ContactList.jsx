import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';

import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}: {number}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


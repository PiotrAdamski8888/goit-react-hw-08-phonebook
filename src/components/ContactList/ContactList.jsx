import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import css from './ContactList.module.css';
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={`${css.contactList} ${css.noPadding}`}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactListItem}>
            <ContactListItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

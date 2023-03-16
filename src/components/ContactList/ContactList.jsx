import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactItem from '../ContactItem/ContactItem';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { fetchAllContacts } from '../../redux/contacts/contacts-operations';

import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

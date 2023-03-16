import ContactForm from '../../components/ContactForm/ContactForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  )
}

export default ContactsPage;

import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import  css  from 'redux/pages/Contacts/Contacts.module.css';


export const ContactsPage = () => {
  return (
    <div >
          
      <div className={css.div}>
        <p  className={css.p}>Phonebook</p>
        <ContactForm />
      </div>
       <div className={css.div}>
        <p  className={css.p}>Contacts</p>
        <Filter />
        <ContactList />
       </div>
   </div>
  );
};

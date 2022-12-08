import { Li, Ul } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors'
import { deleteContact } from 'redux/contacts/operations';


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisiblContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase()))


  return (
  
    <Ul>
      {getVisiblContacts.map(contact => (
        <Li key={contact.id}>
          {contact.name} : {contact.number}
          {
            <button
              
              type="button"
              name="delte"
              onClick= {() => dispatch(deleteContact(contact.id))}
            >
              delete
            </button>
          }
        </Li>
      ))}
    </Ul>
  )
  
    
};
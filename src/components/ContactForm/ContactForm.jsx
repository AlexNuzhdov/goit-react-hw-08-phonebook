
import { Form, Label } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts, getIsLoading, getError} from 'redux/contacts/selectors';


export function ContactForm() {
   
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
  
   const allContacts = useSelector(getContacts);
   const dispatch = useDispatch();
   const error = useSelector(getError)
	 const isLoading = useSelector(getIsLoading)

    const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
    

  
    function handleSubmit(event) {
    event.preventDefault();

      const contactName = [];

      const contactsName = allContacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (contactsName) {
          alert(`${name} is Already in contacts`);
          return;
      }
      const contactNumber = allContacts.find(contact => contact.number === number);
        if (contactNumber) {
          alert(`${number} is Already in contacts`);
          return;
    }

    for (const contact of allContacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(name)) {
      alert(`${name} is already in contacts list`);
      return;
      }
     
      

    dispatch(addContact({ name, number }));
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  };
    

  return (

    <>
        {error && <p>{error}</p>}

       {isLoading ? <p>Request in progress...</p> 
        :
          
        <Form onSubmit = {handleSubmit}>
            <Label>
                Name
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={handleChange}
                required/>
            </Label>
            <Label>
                Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
                required/>
            </Label>
                
            <button type='submit'>Add contact</button>
            
         </Form>
       }
    </>
    
);

    
};

export default  ContactForm;
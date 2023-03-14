import React, { useState } from 'react';
import ContactForm from './phonebook/ContactForm';
import ContactList from './phonebook/ContactList';
import { AppContainer } from './phonebook/Phonebook.styled';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = ({name, number}) => {
    setContacts([...contacts, { id: uuidv4(), name: String(name), number: String(number) }]);
  };
  

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onDeleteContact = id => {
    handleDeleteContact(id);
  };

  return (
    <AppContainer>
      <ContactForm onSubmit={handleAddContact} />
      {contacts.length > 0 && (
        <ContactList contacts={contacts} onDelete={onDeleteContact} />
      )}
    </AppContainer>
  );
}

export default App;

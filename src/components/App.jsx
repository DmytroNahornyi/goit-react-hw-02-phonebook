import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { AppContainer, Title } from './phonebook/Phonebook.styled';
import ContactForm from './phonebook/ContactForm/ContactForm';
import ContactList from './phonebook/ContactList/ContactList';
import Filter from './phonebook/Filter/Filter';
// import '../index.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact => {
    return typeof filter === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </AppContainer>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default App;


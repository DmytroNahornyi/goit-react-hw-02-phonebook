import React from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { AppContainer, Title } from './phonebook/Phonebook.styled';
import ContactForm from './phonebook/ContactForm/ContactForm';
import ContactList from './phonebook/ContactList/ContactList';
import Filter from './phonebook/Filter/Filter';
// import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  addContact(newContact) {
    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  }

  deleteContact(contactId) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  changeFilter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return typeof filter === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </AppContainer>
    );
  }
}

App.propTypes = {
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

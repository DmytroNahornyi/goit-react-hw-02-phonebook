import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { AppContainer, Title } from './phonebook/Phonebook.styled';
import ContactForm from './phonebook/ContactForm/ContactForm';
import ContactList from './phonebook/ContactList/ContactList';
import Filter from './phonebook/Filter/Filter';
// import '../index.css';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </AppContainer>
    );
  }
}

//...

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

// App.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };


export default App;

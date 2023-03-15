import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Button, List } from './ContactList.styled';

function ContactItem({ contact, onDeleteContact }) {
  return (
    <ListItem>
      {contact.name} {contact.number}
      <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
    </ListItem>
  );
}

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

import React from 'react';
import PropTypes from 'prop-types';
import { ContactForm, ContactName, ContactNumber, DeleteButton } from './Phonebook.styled';

function ContactItem({ id, name, number, onDelete }) {
  return (
    <ContactForm>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteButton>
    </ContactForm>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

import React from 'react';
// import './styles/ContactListItem.css';

function ContactListItem({ contact, onDeleteContact }) {
return (
<li className="ContactListItem">
<p className="ContactListItem__name">{contact.name}</p>
<p className="ContactListItem__number">{contact.number}</p>
<button
type="button"
className="ContactListItem__button"
onClick={() => onDeleteContact(contact.id)}
>
Delete
</button>
</li>
);
}

export default ContactListItem;
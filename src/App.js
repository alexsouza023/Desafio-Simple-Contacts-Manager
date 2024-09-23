import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    if (editingContact) {
      const updatedContacts = contacts.map((c, index) =>
        index === editingContact.index ? contact : c
      );
      setContacts(updatedContacts);
      setEditingContact(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const editContact = (index) => {
    setEditingContact({ ...contacts[index], index });
  };

  return (
    <div className="app">

    
      <h1>Simple Contacts Manager</h1>
      <ContactForm onSubmit={addContact} editingContact={editingContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
    </div>
  );
}

export default App;


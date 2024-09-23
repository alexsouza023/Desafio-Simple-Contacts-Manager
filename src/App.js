import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [editingContact, setEditingContact] = useState(null);

  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

/* Add local store e user effect e corrigir erro de carregamento */


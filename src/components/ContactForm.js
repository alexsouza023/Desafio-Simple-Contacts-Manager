import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ContactForm({ onSubmit, editingContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
      setEmail(editingContact.email);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <motion.form
      className="form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {editingContact ? 'Update Contact' : 'Add Contact'}
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;

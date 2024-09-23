import React from 'react';
import { motion } from 'framer-motion';

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <motion.ul
      className="contacts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {contacts.map((contact, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <span>{contact.name}</span>
          <span>{contact.phone}</span>
          <span>{contact.email}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onEdit(index)}
          >
            Edit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(index)}
          >
            Delete
          </motion.button>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default ContactList;

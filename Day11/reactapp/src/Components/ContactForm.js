import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newContact = { name, email };

    onAddContact(newContact);

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br></br>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;
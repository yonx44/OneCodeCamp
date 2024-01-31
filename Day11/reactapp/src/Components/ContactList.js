const ContactList = ({ contacts }) => {
    return (
      <div>
        <h3>Contact List</h3>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <img src={contact.picture} alt={contact.name} />
              <div>
                <strong>{contact.name}</strong>
                <p>Email: {contact.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ContactList;
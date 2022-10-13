import { useState, useEffect } from "react";

import "./styles.css";

import List from "./list";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Harun", phone_number: "05411114546" },
    { fullname: "Fatma", phone_number: "05411234567" },
    { fullname: "Miray", phone_number: "05434534555" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>CONTACTS</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;

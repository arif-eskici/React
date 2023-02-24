import {useState} from 'react';
import Header from './header/Header';
import List from './list/List';
import Footer from './footer/Footer';

function Contacts() {

    const [contacts, setContacts] = useState([]);
    const [situation, setSituation]=useState("All");
    
  return (
    <div>
        <Header setContacts={setContacts} contacts={contacts}/>   
        <List contacts={contacts} setContacts={setContacts} situation={situation}/>
        <Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}/>
    </div>
  )
}

export default Contacts;
import {useEffect, useState} from 'react'
import List from './List'
import Form from './Form'
import './style.css'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName: 'Arif',
            phoneNumber: '0555 123 1122'
        }, {
            fullName: 'Oğuz Kaan',
            phoneNumber: '0542 321 2233'
        }, {
            fullName: 'Özlem',
            phoneNumber: '0532 414 5566'
        }, {
            fullName: 'Mustafa',
            phoneNumber: '0505 777 8899'
        }, {
            fullName: 'Aysel',
            phoneNumber: '0551 325 2544'
        }, {
            fullName: 'Ercan',
            phoneNumber: '0542 741 6611'
        }
    ]);

    useEffect(() => {

    }, [contacts])

  return (
    <div id="container">
        <h1 className="h1">Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
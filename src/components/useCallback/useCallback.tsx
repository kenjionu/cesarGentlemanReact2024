// objetivo: 1 useCallback es un hook para memorizar una instancia de una funcion
// hace que un hijo no renderice si no hay cambios en las props

import { memo, useCallback, useState } from "react";

// Ejemplo:
// Supongamos que tenemos un numero de telefono al que llamas con frecuencia
// En vez de marcarlo continuamente lo vamos almacenar en los contactos del telefono
// A menos que el numero cambie siempre utilizo el mismo contacto.

interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactProps {
    contact: Contact;
    onCall: (phone: string) => void;
}

//Memo es un hook que memoriza una instancia de un componente 

const ContactCard = memo(({contact, onCall}: ContactProps) => {
    console.log("Renderizando ContactCard")

    return (
        <div>
            <h3>{contact.name}</h3>
            <p>telefono {contact.phone}</p>
            <button onClick={() => onCall(contact.name)}>Llamar</button>
        </div>
    )
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([{
        id: 1,
        name: "Manzana",
        phone: "123-456-879"
    },{
        id: 2,
        name: "Pera",
        phone: "123-456-879"
    },
    {
        id: 3,
        name: "Leche",
        phone: "123-456-879"
    }
]);

const [log, setLog] = useState<string>('');
const makeCall = useCallback((name: string) => setLog(`llamando al ${name}`), [])
const addContact = () => {
    const newContact = {
        id: contacts.length + 1,
        name: `Contacto ${contacts.length + 1}`,
        phone: `${Math.floor(10000000000 + Math.random() * 1000000) }`
    }
    setContacts([...contacts, newContact])
}

return (
    <div>
        <h2>Agenda de Contactos</h2>
        {contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
        ))}
        <button onClick={addContact}>Agregar Contacto</button>
        <p>{log}</p>
    </div>
)
}
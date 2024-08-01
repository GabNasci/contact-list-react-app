import { createContext, useState, ReactNode } from "react";
import { Contact } from "../model/Contact";

interface ContactProps {
    contacts: Array<Contact>;
    handleContacts: (arr: Array<Contact>) => void;
}

const ContactContext = createContext<ContactProps>({} as ContactProps);

const ContactProvider = ({ children }: { children: ReactNode }) => {
    const [contacts, setContacts] = useState<Array<Contact>>([]);

    function handleContacts(arr: Array<Contact>) {
        setContacts(arr);
    }

    return (
        <ContactContext.Provider value={{ contacts, handleContacts }}>
            {children}
        </ContactContext.Provider>
    );
}

export { ContactProvider, ContactContext };
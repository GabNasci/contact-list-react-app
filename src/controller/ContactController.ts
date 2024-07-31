import { ContactDTO } from "../interfaces/ContactDTO";

const contacts: Array<ContactDTO> = []

function getContacts(): Array<ContactDTO> {
    return contacts
} 

function createContact(contact: ContactDTO): void {
    contacts.push(contact)
}

export default {
    getContacts,
    createContact
}
import { Contact } from "../model/Contact";

let contacts: Array<Contact> = [
    { id: 1, name: "John Doe1", phone: "(99) 99999-9999", email: "john@example.com", address: "123 Main St", note: "Friend", type: "Personal"},
    { id: 2, name: "John Doe2", phone: "(99) 99999-9999", email: "john@example.com", address: "123 Main St", note: "Friend", type: "Personal"},
    { id: 3, name: "John Doe3", phone: "(99) 99999-9999", email: "john@example.com", address: "123 Main St", note: "Friend", type: "Personal"}
]


function getAllContacts(): Array<Contact> {
    return contacts
}

function getLastId(): number {
    return contacts.length
}

function getContactById(id: number): Contact | undefined {
    return contacts.find((contact) => contact.id === id)
}

function getContactByName(contactName: string): Array<Contact | undefined> {
    return contacts.filter((item) => item.name.includes(contactName))
}

function getContactByPhone(contactPhone: string): Array<Contact | undefined> {
    return contacts.filter((item) => item.name.includes(contactPhone))
}

function getContactByEmail(contactEmail: string): Array<Contact | undefined> {
    return contacts.filter((item) => item.name.includes(contactEmail))
}

function createContact(contact: Contact): void {
    contacts.push({
        id: contacts.length + 1, 
        name: contact.name, 
        phone: contact.phone, 
        email: contact.email, 
        address: contact.address, 
        note: contact.note,
        type: contact.type
    })
}

function deleteContact(contact: Contact): void {
    contacts = contacts.filter((item) => item.id !== contact.id)
}

function updateContact(updatedContact: Contact): void {
    contacts = contacts.map((contact) => contact.id === updatedContact.id ? updatedContact : contact );
}

export default {
    getAllContacts,
    createContact,
    getContactByName,
    getContactByPhone,
    getContactByEmail,
    getLastId,
    getContactById,
    updateContact,
    deleteContact
}
import { useCallback, useEffect, useState } from "react";
import { Contact } from "../model/Contact";
import ContactController from "../controller/ContactController";
import { SelectButton } from 'primereact/selectbutton';



function ListContactsSection() {

    const [contacts, setContacts] = useState<Array<Contact>>([])

    const getContacts = useCallback(() => {
        setContacts(ContactController.getAllContacts())
    }, [contacts])

    useEffect(() => {
        getContacts()
        console.log(ContactController.getAllContacts())
    }, [getContacts])

    return (
        <section className=" h-full bg-white flex flex-col items-center gap-2 p-4 rounded-lg">
            <div>
                <h1>Lista de Contatos</h1>
            </div>
            <form className="flex gap-4 items-end">
                <div className="flex flex-col gap-2">
                    <label htmlFor="option">Buscar por:</label>
                    <select className=" border border-black rounded-md p-1" name="option" id="option">
                        <option value="name">Nome</option>
                        <option value="email">Email</option>
                        <option value="Phone">Telefone</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <input className=" border border-black rounded-md p-1 w-56" type="search" name="search" id="search" placeholder="Busque aqui" />
                </div>
                <div>
                    <button className=" bg-blue-700 px-4 py-1 rounded-md font-bold text-white w-full" type="submit">Buscar</button>
                </div>
            </form>
            <section className="w-full h-full flex justify-center flex-wrap gap-2 p-4">
                { contacts.length ?
                    contacts.map((item) => (
                        <div className="flex flex-col items-center gap-2 shadow-lg border p-4 rounded-lg w-44 h-full" key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.phone}</p>
                            <p>{item.email}</p>
                            <p>{item.address}</p>
                            <p>{item.note}</p>
                            <p>{item.type}</p>

                        </div>
                )) : <p>Sem contatos</p>

                }
            </section>

        </section>
    );
}

export default ListContactsSection
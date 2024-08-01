import { useCallback, useEffect, useState, useContext } from "react";
import { Contact } from "../model/Contact";
import ContactController from "../controller/ContactController";
import { ContactContext } from "./Context";



function ListContactsSection() {

    const { contacts, handleContacts } = useContext(ContactContext);
    const [filterSelected, setFilter] = useState<number>(1)

    const getContacts = useCallback(() => {
        console.log("lal")

    }, [contacts])  

    useEffect(() => {

        getContacts()
    }, [getContacts])

    return (
        <section className=" h-full bg-white flex flex-col items-center gap-2 p-4 rounded-lg">
            <div>
                <h1>Lista de Contatos</h1>
            </div>
            <form onChange={() => console.log("lal")} className="flex gap-4 items-end">
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
            <div className="flex gap-2">
                <button onClick={() => setFilter(1)} className="px-4 py-1 border rounded-lg" style={filterSelected === 1 ? {backgroundColor: "blue", color: "white"}: {backgroundColor: "white"}}>Todos</button>
                <button onClick={() => setFilter(2)} className="px-4 py-1 border rounded-lg" style={filterSelected === 2 ? {backgroundColor: "blue", color: "white"}: {backgroundColor: "white"}}>Personal</button>
                <button onClick={() => setFilter(3)} className="px-4 py-1 border rounded-lg" style={filterSelected === 3 ? {backgroundColor: "blue", color: "white"}: {backgroundColor: "white"}}>Professional</button>
            </div>
            <section className="w-full h-full flex justify-center flex-wrap gap-2 p-4">
                {contacts.length ?
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
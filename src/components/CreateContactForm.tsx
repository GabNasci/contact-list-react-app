import { contactSchema } from "../schema/contactSchema";
import { Contact } from "../model/Contact";
import ContactController from "../controller/ContactController";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from 'primereact/inputmask';
import { ContactContext } from "./Context";
import { useContext } from "react";


function CreateContactForm() {

    const { control, register, handleSubmit, formState: { errors } } = useForm<Contact>({
        resolver: zodResolver(contactSchema)
    })

    const { contacts, handleContacts } = useContext(ContactContext);



    const handleForm = (data: Contact) => {
        ContactController.createContact(data)
        handleContacts(ContactController.getAllContacts())
    }

    return (
        <form className="flex flex-col items-center gap-2 bg-white rounded-lg p-4" autoComplete="off" onSubmit={handleSubmit(handleForm)} >
            <div>
                <h1>Criação de Contato</h1>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name: <span className=" text-red-600">*</span></label>
                        <input className=" border border-black rounded-md p-1 w-56" type="text" {...register('name')} required id="name" placeholder="write your name correctly." />
                        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phone">Phone: <span className=" text-red-600">*</span></label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    className="border border-black rounded-md p-1 w-56"
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.value)}
                                    mask="(99) 99999-9999"
                                    placeholder="(99) 99999-9999"
                                />
                            )}
                        />
                        {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">E-mail: <span className=" text-red-600">*</span></label>
                        <input className=" border border-black rounded-md p-1 w-56" type="email" {...register('email')} id="email" placeholder="write your email correctly." />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="address">Address: </label>
                        <input className=" border border-black rounded-md p-1 w-56" type="text" {...register('address')} id="address" placeholder="write your address correctly." />
                        {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="note">Note: </label>
                        <input className=" border border-black rounded-md p-1 w-56" type="text" {...register('note')} id="note" placeholder="write your note correctly." />
                        {errors.note && <p className="text-red-600 text-sm">{errors.note.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="note">Type: </label>
                        <select defaultValue={"Personal"} className=" border border-black rounded-md p-1 w-56" {...register('type')} name="type" id="type">
                            <option value="Personal">Personal</option>
                            <option value="Professional">Professional</option>
                        </select>
                        {errors.note && <p className="text-red-600 text-sm">{errors.note.message}</p>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className=" bg-blue-700 px-4 py-1 rounded-md font-bold text-white w-full" type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default CreateContactForm;
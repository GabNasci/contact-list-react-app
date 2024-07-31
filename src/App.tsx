import { contactSchema } from "./schema/contactSchema";
import { ContactDTO } from "./interfaces/ContactDTO";
import ContactController from "./controller/ContactController";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputMask from "react-input-mask"

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<ContactDTO>({
    resolver: zodResolver(contactSchema)
  })


  const handleForm = (data: ContactDTO) => {
    ContactController.createContact(data)
    console.log(ContactController.getContacts())
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
            <input className=" border border-black rounded-md p-1 w-96" type="text" {...register('name')} required id="name" placeholder="write your name correctly." />
            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone">Phone: <span className=" text-red-600">*</span></label>
            
            <InputMask className="border border-black rounded-md p-1 w-96" {...register('phone')} id="phone" mask="(99) 99999-9999" placeholder="(DDD)XXXXX-XXXX" />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail: <span className=" text-red-600">*</span></label>
            <input className=" border border-black rounded-md p-1 w-96" type="email" {...register('email')} id="email" placeholder="write your email correctly." />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address">Address: </label>
            <input className=" border border-black rounded-md p-1 w-96" type="text" {...register('address')} id="address" placeholder="write your address correctly." />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="note">Note: </label>
            <input className=" border border-black rounded-md p-1 w-96" type="text" {...register('note')} id="note" placeholder="write your note correctly." />
            {errors.note && <p>{errors.note.message}</p>}
          </div>

        </div>

        <div className="flex justify-center">
          <button className=" bg-blue-700 px-4 py-1 rounded-md font-bold text-white w-full" type="submit">Submit</button>
        </div>
      </div>

    </form>
  )
}

export default App

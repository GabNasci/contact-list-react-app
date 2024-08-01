import CreateContactForm from "./components/CreateContactForm"
import ListContactsSection from "./components/ListContactsSection"
import { useState } from "react";
import { Contact } from "./model/Contact";
import ContactController from "./controller/ContactController";
import { ContactContext, ContactProvider } from "./components/Context";


function App() {

  return (
    <ContactProvider>
      <main className="flex gap-4">
        <CreateContactForm></CreateContactForm>
        <ListContactsSection></ListContactsSection>
      </main>
    </ContactProvider>
  )
}

export default App

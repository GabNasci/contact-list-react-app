import CreateContactForm from "./components/CreateContactForm"
import ListContactsSection from "./components/ListContactsSection"


function App() {

  

  return (
    <main className="flex gap-4">
      <CreateContactForm></CreateContactForm>
      <ListContactsSection></ListContactsSection>
    </main>
  )
}

export default App

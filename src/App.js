import { Component } from "react";
import shortid from 'shortid';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
     filter: '',
  };

   componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts
      });
    }
    
  };

  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };



  

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some(el => el.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = { id: shortid.generate(), name, number };
      console.log(newContact);

    this.setState(({contacts}) => ({
      contacts: [...contacts, newContact]
    }))
    }
  };

  onChangFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  

  onDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  getVisibleContacts = () => {
    // деструктуризуєм фільтер і контакти
    const {filter, contacts} = this.state;
    // const normalizedFilter = this.state.filter.toLowerCase();
    const normalizedFilter = filter.toLowerCase();
    // return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  }


 

  render() {

    const visibleContacts = this.getVisibleContacts();

    return (   
  <div>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.formSubmitHandler}/>

  <h2>Contacts</h2>
  <Filter value = {this.state.value} changFilter ={this.onChangFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.onDeleteContact}/>
</div>
  )


} 
}

export default App;




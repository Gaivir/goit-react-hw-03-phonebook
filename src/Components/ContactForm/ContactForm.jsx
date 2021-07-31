import React, { Component } from 'react';
import shortid from 'shortid';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

   nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleNameChange = event => {
    // console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;

    this.setState({ [name] : value });
    };
    

     handleSubmit = event => {
    event.preventDefault();
         this.props.onSubmit(this.state);
         this.formReset();
         
    }
    
    formReset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }



    render() {
        return (

                <form onSubmit={this.handleSubmit}>
          <label htmlFor={ this.nameInputId}>name
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id={this.nameInputId}
                    />
                    </label>
                    
              
                <label htmlFor={ this.numberInputId}>number
                    <input
                        type='tel'
                    name='number'
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                        value={this.state.number}
                        onChange={this.handleNameChange}
                        id={this.numberInputId}
                    />
                </label>
                
                <button type='submit'>Add contacts</button>
          
        </form>

        )
    }
}


export default ContactForm;
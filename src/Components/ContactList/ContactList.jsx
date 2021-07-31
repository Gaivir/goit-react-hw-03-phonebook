
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    contacts.map(({ id, name, number }) => (
        <ul>
            <li key={id} className={styles.list}>{name}: {number}</li>
            <button onClick ={()=>onDeleteContact(id)}>Delete</button>
        </ul>
    ))
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
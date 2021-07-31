// import styles from './Filter.module.css';

const Filter = ({value, changFilter}) => (
    <label>Find contacts by name
        <input type="text" value={value}
        onChange ={changFilter}/>

    </label>
)


export default Filter;
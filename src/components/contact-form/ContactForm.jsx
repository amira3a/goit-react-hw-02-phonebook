import  style from '../contact-form/style.module.css';

function ContactForm({ handleNameChange, handleNumberChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}  className={style.contactForm}>
      <div>
        <label >Name:</label>
        <input type="text" id="name"  onChange={handleNameChange} />
      </div>
      <div>
        <label >Number:</label>
        <input type="tel" id="number"  onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}

export default ContactForm;
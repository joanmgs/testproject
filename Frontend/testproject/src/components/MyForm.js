import { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    const nameValue = e.target.value;
    nameValue.length > 0 ? setName(nameValue) : console.warn("empty name");
  };
  const handleLastname = (e) => {
    const lastnameValue = e.target.value;
    lastnameValue.length > 0 ? setLastname(lastnameValue) : console.warn("empty lastname");
  };
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    emailValue.length > 0 ? setEmail(emailValue) : console.warn("empty email");
  };

  const handleSubmit = (e) => {
    if (name && lastname && email) {

    } else {
      console.warn("There are empty fields yet");
    };
  };

  return (
    <div>
      <h1>This is the form!</h1>
      <form className="my-form-container">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={handleName}/>

          <label htmlFor="lastname">Lastname</label>
          <input type="text" value={lastname} onChange={handleLastname}/>

          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={handleEmail}/>

          <button className="btn-form" type="submit" onClick={handleSubmit}>
            Send!
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;

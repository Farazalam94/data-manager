import axios from "axios";
import React, { useState } from "react";
import Styles from "./form.module.css";
const Form = ({ setApiData, apiData }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        id: Math.random(),
      })
      .then((response) => setApiData([...apiData, response.data]))
      .catch((error) => alert(error));
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.container}>
      <div className={Styles.inputContainer}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className={Styles.input}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={Styles.inputContainer}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail"
          value={formData.email}
          className={Styles.input}
          onChange={handleChange}
        />
      </div>
      <div className={Styles.inputContainer}>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          className={Styles.input}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={Styles.submit}>
        Submit
      </button>
    </form>
  );
};

export default Form;

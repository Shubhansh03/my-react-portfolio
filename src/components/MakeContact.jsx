import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MakeContact = () => {
  const form = useRef();

  const initialValues = { user_name: "", user_email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(!formErrors && isSubmit){
      setFormValues(initialValues)
    }else{
      setFormValues(formValues);
    }

    emailjs
      .sendForm("service_jdju33u", "template_mt5vjpk", form.current, {
        publicKey: "obzkDa2XXIbHEzp6d",
      })
      .then(
        () => {
          e.target.reset();
        },
        (error) => {
          e.target.reset();
        }
      );
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!values.user_name) {
      errors.user_name = "Username is Required";
    }
    if (!values.user_email) {
      errors.user_email = "Email is Required";
    } else if (regex.test(values.email)) {
      errors.user_email = "Invalid Email !";
    }
    if (!values.message) {
      errors.message = "Some text is Required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <Link to="/">
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4 mx-6">
          ❮ Return
        </button>
      </Link>
      <h1 className="my-3 text-center text-4xl"> Contact </h1>
      <div className="justify-center text-center align-center w-full flex">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="rounded w-48 bg-green-200 text-green-950 font-bold px-2 align-center duration-75 text-center justify-center">
            Email Sent Successfully
          </div>
        ) : (
          <div />
        )}
      </div>
      <div className="mb-6 my-5 justify-center flex">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="px-12 py-6 flex flex-col justify-center bg-neutral-900 rounded-md bg-opacity-60 text-center items-center gap-2 text-lg font-bold tracking-tight"
        >
          <label className="text-white">Name :</label>
          <input
            type="text"
            name="user_name"
            onChange={handleChange}
            value={formValues.user_name}
            placeholder="John Doe"
            className="rounded-lg text-black font-medium px-4 py-2 text-base"
          />
          <p className="text-sm text-red-500">{formErrors.user_name}</p>
          <label>Email :</label>
          <input
            type="email"
            name="user_email"
            onChange={handleChange}
            value={formValues.user_email}
            placeholder="johndoe@gmail.com"
            className="rounded-lg text-black font-medium px-4 py-2 text-base"
          />
          <p className="text-sm text-red-500">{formErrors.user_email}</p>
          <label>Message :</label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Enter required text here..."
            className="rounded-lg text-black font-medium px-4 py-2 text-lg w-full lg:w-80 lg:h-32"
          />
          <p className="text-sm text-red-500">{formErrors.message}</p>
          <button
            type="submit"
            value="Send"
            className="rounded-lg bg-purple-900 hover:bg-white hover:text-purple-700 text-white px-5 py-2 my-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeContact;

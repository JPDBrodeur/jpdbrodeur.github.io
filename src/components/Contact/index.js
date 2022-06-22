import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ formState });
    if (email !== '' && name !== '' &&message !== '') {
      const response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ formState }),
      })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === 'success') {
            setSuccessMessage('Your message has been sent.');
          } else if (resData.status === 'fail') {
            setSuccessMessage('Message failed to send');
          }
        })
        .then(() => {
          setFormState({
            email: '',
            name: '',
            message: '',
          });
        })
        .then(() => {
          e.target.reset();
        });
    } else {
      setErrorMessage('Message failed to send');
    }

  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="mt-5 lg:mt-10">
      <h2 className="text-center text-3xl">Let's get in touch.</h2>
      <div className="flex justify-center mt-10">
        <form id="contact-form" className="w-full sm:w-2/3 md:w-1/2 xl:w-1/3 mx-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address:</label>
            <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          <div className="flex justify-between">
            <button data-testid="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            <div>
              {errorMessage && (
                <p className="text-red-500 text-sm italic py-2">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm italic py-2">{successMessage}</p>
              )}
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

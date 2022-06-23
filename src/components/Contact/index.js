import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mlezkbvg");
  if (state.succeeded) {
    return <p className="mt-5 lg:mt-10 text-center text-3xl">Your message has been sent!</p>;
  }

  return (
    <section className="mt-5 lg:mt-10">
      <h2 className="text-center text-3xl">Let's get in touch.</h2>
      <div className="flex justify-center mt-10">
        <form className="w-full sm:w-2/3 md:w-1/2 xl:w-1/3 mx-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="full-name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input id="full-name" type="text" name="name" required="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address:</label>
            <input id="name" type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" />

          </div>
          <div className="flex justify-between">
            <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:scale-105 ease-in duration-200">Submit</button>
            <div>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zzjnvir',
      'template_jc58a5m',
      form.current,
      'tk-RkJRnBiiK60j7d'
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Error sending message. Please try again.");
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-10 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Message</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea name="message" required rows="5" className="w-full px-4 py-2 border rounded-lg"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
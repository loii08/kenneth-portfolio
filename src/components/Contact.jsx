import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-white">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <p>If you'd like to connect, feel free to reach out:</p>
      <ul className="mt-4">
        <li>Email: <a href="mailto:kijbutad08@gmail.com" className="text-blue-600">kijbutad08@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/kenloi08" target="_blank" className="text-blue-600">@kenloi08</a></li>
      </ul>
    </section>
  );
};

export default Contact;
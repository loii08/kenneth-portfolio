import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-white">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <p>If you'd like to connect, feel free to reach out:</p>
      <ul className="mt-4">
        <li>Email: <a href="mailto:kenneth.irvinb@gmail.com" className="text-blue-600">kenneth.irvinb@gmail.com</a></li>
        <li>
          <div className="container mx-auto space-x-6">
            <a href="https://m.facebook.com/ascorpkbutad" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-blue hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H8.07v-2.89h2.37V9.91c0-2.34 1.4-3.64 3.55-3.64 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.89h-2.2v6.99C18.34 21.2 22 17.06 22 12.07z" />
              </svg>
            </a>
            <a href="https://github.com/loii08" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-black hover:fill-black-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.76 8.207 11.335.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.607-4.033-1.607-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.468-2.38 1.236-3.22-.123-.305-.535-1.535.117-3.198 0 0 1.008-.323 3.3 1.23.96-.267 1.98-.4 3-.404 1.02.004 2.04.137 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.663.24 2.893.12 3.198.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.103.823 2.222v3.293c0 .32.19.694.8.577C20.565 22.256 24 17.78 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
            <a href="mailto:kenneth.irvinb@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-red hover:fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z" />
              </svg>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
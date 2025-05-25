import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold transition" ><a href="#hero">Kenneth Butad</a></h1>
      <ul className="flex gap-4">
        <li><a href="#about" class="transition">About</a></li>
        <li><a href="#projects" class="transition">Projects</a></li>
        <li><a href="#contact" class="transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// Header.js

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Банк XYZ</div>
      <nav className="hidden sm:flex space-x-4">
        <a href="/" className="hover:text-gray-300">Главная</a>
        <a href="/clients" className="hover:text-gray-300">Клиенты</a>
        <a href="/transactions" className="hover:text-gray-300">Транзакции</a>
      </nav>
      <div className="sm:hidden">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <GiHamburgerMenu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;

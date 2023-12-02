// Sidebar.js

import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-800 text-white p-4 h-screen fixed ${isOpen ? 'right-0' : '-right-full'} transition-all duration-300`}>
      <div className="flex justify-end">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <IoMdClose size={24} />
        </button>
      </div>
      <ul className="space-y-4 mt-4">
        <li>
          <a href="/" className="block px-2 py-1 hover:bg-gray-700">Главная</a>
        </li>
        <li>
          <a href="/clients" className="block px-2 py-1 hover:bg-gray-700">Клиенты</a>
        </li>
        <li>
          <a href="/transactions" className="block px-2 py-1 hover:bg-gray-700">Транзакции</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

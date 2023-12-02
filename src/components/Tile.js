// Tile.js

import React from "react";

const Tile = ({ icon, title, clicjEv }) => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-xl text-center flex flex-col items-center border border-[#2c2c2c6c] cursor-pointer"
      onClick={clicjEv}
    >
      {icon}
      <p className="mt-2 text-lg font-bold">{title}</p>
    </div>
  );
};

export default Tile;

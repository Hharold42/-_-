// App.js

import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TilesGrid from "./components/TilesGrid";
import ImageCarousel from "./components/Carousell";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <ImageCarousel />
        <TilesGrid />
      </div>
    </div>
  );
};

export default App;

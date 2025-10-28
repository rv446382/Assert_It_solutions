import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-[140px]"> {/* Push Home content below navbars */}
        <Home />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import WalletModal from './components/Popup vingt/WalletModal.jsx';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E]">
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#5C5CFF] rounded-lg transition-all duration-200 hover:bg-[#4A4AFF] active:scale-95 border-2 border-green-500"
      >
        Connect Wallet
      </button>

      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;


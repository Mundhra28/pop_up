import React from 'react';
import WalletLeftPanel from './WalletLeftPanel';

const WalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[1000] box-border p-2.5 md:items-start md:overflow-y-auto md:pt-10" 
      onClick={onClose}
    >
      <div 
        className="flex w-[80%] max-w-[700px] h-[480px] bg-[#1A1A1A] rounded-2xl overflow-hidden flex-col md:h-auto md:max-w-[95%] lg:flex-row lg:max-w-[700px]" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Panel */}
        <div className="w-full bg-[#1A1B23] p-4 flex flex-col text-white order-1 lg:w-[31%] lg:order-none">
          <WalletLeftPanel />
        </div>

        {/* Right Panel */}
        <div className="w-full p-6 bg-[#1A1A1A] text-white flex flex-col justify-between relative order-2 lg:w-[70%] lg:order-none">
          <button 
            className="absolute bg-none border-none text-[#666] text-2xl cursor-pointer p-0 top-4 right-4 leading-none" 
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="mt-16 text-[30px] text-white m-0 mb-3 md:text-2xl">
            Available Wallets
          </h2>

          <div className="flex items-center gap-[5px] mb-6">
            <input type="checkbox" id="terms" className="checkbox" />
            <label htmlFor="terms" className="text-[#999] text-sm">
              I agree to the <a href="#" className="text-[#5C5CFF] no-underline">Terms & Conditions</a> and <a href="#" className="text-[#5C5CFF] no-underline">Privacy Policy</a>.
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-1">
            {[
              { src: '/coinbase.svg', name: 'Coinbase Wallet' },
              { src: '/MetaMask-icon.svg.png', name: 'MetaMask' },
              { src: '/phantom-icon.svg', name: 'Phantom' },
              { src: '/Binance-icon.svg', name: 'Binance' },
            ].map((wallet) => (
              <div 
                className="bg-[#2A2A2A] border border-[#333] rounded-lg p-3 flex items-center gap-3 text-white text-sm cursor-pointer transition-all duration-200 hover:bg-[#333] hover:border-[#444]" 
                key={wallet.name}
              >
                <img src={wallet.src} alt={wallet.name} className="w-[30px] h-[30px]" />
                <span>{wallet.name}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg p-3 text-[#999] text-sm cursor-pointer flex justify-between items-center">
            <span>Why don't I see my wallet?</span>
            <span className="bg-[#333] rounded-full w-5 h-5 flex items-center justify-center text-[#999]">?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;

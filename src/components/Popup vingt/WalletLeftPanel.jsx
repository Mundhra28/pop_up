import React from 'react';

const WalletLeftPanel = () => {
  return (
    <div className="bg-[#1A1B23] text-white p-2.5 flex flex-col w-full max-w-[80%] rounded-tl-[10px] rounded-bl-[16px] h-full md:w-[70%] md:max-w-full md:p-4 md:box-border">
      {/* Top Content */}
      <div className="flex-grow">
        <div className="flex items-center gap-0 mb-6">
          <img src="/VingtLogo.png" alt="logo" className="w-14 h-14 object-contain" />
          <span className="font-bold text-[25px] text-white">Vingt.io</span>
        </div>

        <div className="block w-full">
          <h2 className="py-2.5 text-2xl font-semibold mb-3 whitespace-nowrap md:whitespace-normal md:text-xl">
            Connect your wallet
          </h2>
          <p className="text-[0.9rem] leading-6 text-slate-300 mb-4 w-full max-w-full block text-left whitespace-normal break-words">
            Connecting your wallet is like "logging in" to Vingt.io. Select your wallet from the options to get started.
          </p>
          <a href="#" className="text-sm text-indigo-500 cursor-pointer inline-flex items-center gap-1 whitespace-nowrap">
            I don't have a wallet ℹ️
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pl-2.5 flex flex-col items-center gap-2 mt-auto pt-4">
        <div className="flex gap-2 justify-center items-center">
          <button className="w-2 h-2 bg-indigo-500 rounded-full border-none cursor-pointer p-0"></button>
          <button className="w-2 h-2 bg-gray-600 rounded-full border-none cursor-pointer p-0"></button>
          <button className="w-2 h-2 bg-gray-600 rounded-full border-none cursor-pointer p-0"></button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 justify-center whitespace-nowrap md:gap-2.5">
          powered by
          <img src="/VingtLogo.png" alt="logo" className="w-[30px] h-10 object-contain" />
          <span className="font-medium text-white text-base pt-0">Vingt.io</span>
        </div>
      </div>
    </div>
  );
};

export default WalletLeftPanel;

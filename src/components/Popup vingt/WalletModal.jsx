import React from 'react';
import WalletLeftPanel from './WalletLeftPanel';
import './WalletModal.css';

const WalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-two-pane" onClick={(e) => e.stopPropagation()}>
        {/* Left Panel */}
        <div className="left-panel">
          <WalletLeftPanel />
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>

          <h2 className="wallet-heading">Available Wallets</h2>

          <div className="terms">
            <input type="checkbox" id="terms" className="checkbox" />
            <label htmlFor="terms" className="terms-text">
              I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
            </label>
          </div>

          <div className="wallet-grid">
            {[
              { src: '/coinbase.svg', name: 'Coinbase Wallet' },
              { src: '/MetaMask-icon.svg.png', name: 'MetaMask' },
              { src: '/phantom-icon.svg', name: 'Phantom' },
              { src: '/Binance-icon.svg', name: 'Binance' },
            ].map((wallet) => (
              <div className="wallet-option" key={wallet.name}>
                <img src={wallet.src} alt={wallet.name} className="wallet-icon" />
                <span>{wallet.name}</span>
              </div>
            ))}
          </div>

          <button className="help-button">
            <span>Why don't I see my wallet?</span>
            <span className="help-icon">?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;

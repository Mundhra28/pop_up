import React from 'react';
import './WalletLeftPanel.css'; // This should contain the CSS you just shared

const WalletLeftPanel = () => {
  return (
    <div className="wallet-left-panel">
      {/* Top Content */}
      <div className="wallet-top">
        <div className="wallet-logo">
          <img src="/VingtLogo.png" alt="logo" className="wallet-icon" />
          <span className="vingt-io">Vingt.io</span>
        </div>

        <div className="wallet-header-wrapper">
          <h2 className="wallet-title">Connect your wallet</h2>
          <p className="wallet-description">
            Connecting your wallet is like “logging in” to Vingt.io. Select your wallet from the options to get started.
          </p>
          <a href="#" className="wallet-link">I don’t have a wallet ℹ️</a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="wallet-footer">
        <div className="wallet-dots">
          <button className="dot active"></button>
          <button className="dot"></button>
          <button className="dot"></button>
        </div>

        <div className="powered-text">
          powered by
          <img src="/VingtLogo.png" alt="logo" className="brand-logo" />
          <span className="vingt-io-brand">Vingt.io</span>
        </div>
      </div>
    </div>
  );
};

export default WalletLeftPanel;

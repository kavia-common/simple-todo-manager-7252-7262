import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Header component representing the status bar and app bar, matching the design.
 */
export default function Header() {
  return (
    <header aria-label="App header">
      {/* Status Bar (stylized container to respect 44px height) */}
      <div className="statusbar" aria-hidden="true">
        <div className="time typo-10-400" style={{ color: 'var(--color-ffffff)' }}>9:41</div>
        <div className="status-icons">
          <span className="signal" title="Signal"></span>
          <span className="wifi" title="WiFi"></span>
          <span className="battery" title="Battery"></span>
        </div>
      </div>

      {/* App Bar (118px high, style_2 background) */}
      <div className="appbar">
        <h1 className="appbar-title typo-title-24-600">TODO APP</h1>
        <div className="calendar icon" aria-hidden="true"></div>
      </div>
    </header>
  );
}

import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Tabs for filtering todos. "all" and "completed".
 */
export default function Tabs({ active, onChange }) {
  return (
    <nav className="tabbar" aria-label="Todo filters">
      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={active === 'all'}
          className={`tab all typo-10-400 ${active === 'all' ? 'active' : ''}`}
          onClick={() => onChange('all')}
          data-tab="all"
        >
          All
        </button>
        <button
          role="tab"
          aria-selected={active === 'completed'}
          className={`tab completed typo-10-400 ${active === 'completed' ? 'active' : ''}`}
          onClick={() => onChange('completed')}
          data-tab="completed"
        >
          Completed
        </button>
      </div>
    </nav>
  );
}

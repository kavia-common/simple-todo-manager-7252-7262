import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Floating Action Button to add a new todo.
 */
export default function AddButton({ onClick }) {
  return (
    <button className="fab" onClick={onClick} aria-label="Add New ToDo" data-role="fab-add">
      <span className="plus" aria-hidden="true">+</span>
    </button>
  );
}

import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * A single Todo item card matching the design.
 */
export default function TodoItem({ todo, onUpdate, onDelete, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [subtitle, setSubtitle] = useState(todo.subtitle);

  const startEdit = () => setIsEditing(true);
  const cancelEdit = () => {
    setTitle(todo.title);
    setSubtitle(todo.subtitle);
    setIsEditing(false);
  };
  const saveEdit = () => {
    onUpdate({ ...todo, title: title.trim(), subtitle: subtitle.trim() });
    setIsEditing(false);
  };

  return (
    <div className="todo-card card" data-todo data-completed={String(todo.completed)}>
      <div className="titles" style={{ opacity: todo.completed ? 0.6 : 1 }}>
        {!isEditing ? (
          <>
            <div className="title typo-13-600" style={{ color: 'var(--typo-9-color)', textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </div>
            <div className="subtitle typo-10-400" style={{ color: 'var(--typo-10-color)' }}>
              {todo.subtitle}
            </div>
          </>
        ) : (
          <div className="add-form" style={{ gridColumn: '1 / -1' }}>
            <input
              aria-label="Edit title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              aria-label="Edit subtitle"
              placeholder="Subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <div style={{ display: 'flex', gap: 8 }}>
              <button type="button" onClick={saveEdit} aria-label="Save">Save</button>
              <button type="button" onClick={cancelEdit} aria-label="Cancel" style={{ background: '#ccc', color: '#000' }}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      {!isEditing && (
        <div className="actions">
          <button className="icon-btn" title="Edit" aria-label="Edit" onClick={startEdit}>✎</button>
          <button className="icon-btn" title="Delete" aria-label="Delete" onClick={() => onDelete(todo.id)}>🗑</button>
          <button className="icon-btn" title={todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'} aria-label="Complete" onClick={() => onToggle(todo.id)}>
            ✓
          </button>
        </div>
      )}
    </div>
  );
}

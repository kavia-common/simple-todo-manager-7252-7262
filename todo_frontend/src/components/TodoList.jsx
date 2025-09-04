import React, { useMemo, useState } from 'react';
import TodoItem from './TodoItem';

/**
 * PUBLIC_INTERFACE
 * TodoList renders the add form and the list of todos with filter applied.
 */
export default function TodoList({ todos, filter, onAdd, onUpdate, onDelete, onToggle }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const filtered = useMemo(() => {
    if (filter === 'completed') {
      return todos.filter(t => t.completed);
    }
    return todos;
  }, [todos, filter]);

  const submit = (e) => {
    e.preventDefault();
    const t = title.trim();
    const s = subtitle.trim();
    if (!t) return;
    onAdd({ title: t, subtitle: s });
    setTitle('');
    setSubtitle('');
  };

  return (
    <main className="todos" aria-label="Todo list" data-role="todo-list">
      <form className="add-form" onSubmit={submit} aria-label="Add todo form">
        <input
          placeholder="Title"
          aria-label="New todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Subtitle"
          aria-label="New todo subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <button type="submit" aria-label="Add">Add</button>
      </form>

      {filtered.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </main>
  );
}

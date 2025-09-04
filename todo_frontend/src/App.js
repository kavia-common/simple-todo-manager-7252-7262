import React, { useMemo, useState } from 'react';
import './index.css';
import './styles/common.css';
import './styles/todo-page.css';

import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';

/**
 * PUBLIC_INTERFACE
 * Root App for the Todo frontend, implementing the Figma-derived design and interactions.
 */
export default function App() {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([
    { id: 1, title: 'TODO TITLE', subtitle: 'TODO SUB TITLE', completed: false },
    { id: 2, title: 'TODO TITLE', subtitle: 'TODO SUB TITLE', completed: false },
    { id: 3, title: 'TODO TITLE', subtitle: 'TODO SUB TITLE', completed: false },
    { id: 4, title: 'TODO TITLE', subtitle: 'TODO SUB TITLE', completed: false },
  ]);

  const nextId = useMemo(() => {
    return () => (todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1);
  }, [todos]);

  // PUBLIC_INTERFACE
  const addTodo = ({ title, subtitle }) => {
    const id = nextId();
    setTodos(prev => [...prev, { id, title, subtitle, completed: false }]);
    // scroll feedback is naturally handled by layout; FAB mirrors original behavior
  };

  // PUBLIC_INTERFACE
  const updateTodo = (updated) => {
    setTodos(prev => prev.map(t => t.id === updated.id ? updated : t));
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="container-viewport todo-page">
      <Header />
      <Tabs active={filter} onChange={setFilter} />
      <div className="background-rect" aria-hidden="true"></div>
      <TodoList
        todos={todos}
        filter={filter}
        onAdd={addTodo}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
      <AddButton onClick={() => addTodo({ title: 'TODO TITLE', subtitle: 'TODO SUB TITLE' })} />
    </div>
  );
}

import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, text]);
    setText("");
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

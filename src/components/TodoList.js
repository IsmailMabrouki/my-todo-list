import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./TodoList.css";

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) return; // prevent adding empty todo item
    const newItem = {
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setItems([...items, newItem]);
    setText("");
  };

  const handleToggleCompletion = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
              onClick={() => handleToggleCompletion(item.id)}
            >
              {item.text}
            </span>
            <button onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );  
}

export default TodoList;

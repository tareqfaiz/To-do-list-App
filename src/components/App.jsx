import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <div className="form">
          <input
            onChange={handleChange}
            type="text"
            value={inputText}
            onKeyDown={handleKeyPress}
          />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} text={todoItem} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./styles.css";

import Paper from "./components/Paper";
import Header from "./components/Header";

export default function App() {
  return (
    <Paper>
      <Header />
      <section className="add">
        <form action="" className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
      </section>
    </Paper>
  );
}

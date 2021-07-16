import React from "react";
// import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = () => {
  const Todos = [
    {
      text: "Belajar React 1"
    },
    {
      text: "Belajar React 2"
    },
    {
      text: "Belajar React 3"
    },
    {
      text: "Belajar React 4"
    },
    {
      text: "Belajar React 5"
    }
  ];

  return (
    <section className="todos">
      {/* <Todo text="Belajar Props di React" /> */}
      {Todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

// Paper.PropTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ])
// };

export default Todos;

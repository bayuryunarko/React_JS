import React from "react";
// import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = () => {
  return (
    <section className="todos">
      <Todo text="Belajar Props di React" />
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

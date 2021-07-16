import React from "react";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <section className="header">
      <button className="header-btn main-black-color">Add</button>
      <h1 className="header-title">To Do List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

// Paper.PropTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ])
// };

export default Header;

import React from "react";

const Category = ({ name, updateCategory }) => {
  const handleClick = () => {
    console.log(name);
    updateCategory(name);
  };
  return <p onClick={handleClick}>{name}</p>;
};

export default Category;

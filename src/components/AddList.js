import React, { useState, useEffect } from 'react';

const AddForm = ({ setLists }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;
    const newlist = {
      id: 3,
      name,
      price,
    };

    setLists((prev) => {
      return prev.concat(newlist);
    });
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="text" name="price" placeholder="Enter Price" />
      <button type="submit"> Add</button>
    </form>
  );
};

export default AddForm;

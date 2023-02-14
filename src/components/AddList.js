import React, { useState, useEffect } from 'react';

const AddForm = ({ setLists }) => {
  const [item, setItem] = useState({
    id: '',
    name: '',
    price: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    // const newlist = {
    //   id: 3,
    //   name,
    //   price,
    // };

    setLists((prev) => {
      return prev.concat(newlist);
    });
  }

  const add = (e) => {
    setItem({ [e.target.name]: e.target.value });
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={add}
        placeholder="Enter Name"
      />
      <input
        type="text"
        name="price"
        value={item.price}
        onChange={add}
        placeholder="Enter Price"
      />
      <button type="submit"> Add</button>
    </form>
  );
};

export default AddForm;

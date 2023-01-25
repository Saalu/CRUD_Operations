import React from 'react';

const AddForm = () => {
  return (
    <form className=''>
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="text" name="price" placeholder="Enter Price" />
      <button type='submit'> Add</button>
    </form>
  );
};

export default AddForm;

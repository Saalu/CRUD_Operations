import React, { useState } from 'react';
import './style.css';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';
import AddList from './components/AddList';

export default function App() {
  const list = [
    {
      id: 1,
      name: 'HP',
      price: '2100',
    },
    {
      id: 2,
      name: 'Toshiba',
      price: '1900',
    },
    {
      id: 3,
      name: 'Dell',
      price: '2300',
    },
  ];

  const [lists, setLists] = useState(list);

  return (
    <div className="crud">
      <AddList setLists={setLists} />
      {lists.map((item) => (

        <table>
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td className="btn edit">Edit</td>
            <td className="btn del">Delete</td>
          </tr>
          ;
        </table>
      )
      )}
    </div>
  );
}

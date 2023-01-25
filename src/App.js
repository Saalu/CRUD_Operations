import React, { useState } from 'react';
import './style.css';
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom';
import AddList from './components/AddList'

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

  const numbers = [1, 2, 3, 4, 5];

  const [lists, setList] = useState(list);
  console.log(lists);
  return (
    <div className="crud">
      <AddList/>
      {lists.map((current) => (
        <table>
          <tr>
            <td>{current.name}</td>
            <td>{current.price}</td>
            <td className="btn edit">Edit</td>
            <td className="btn del">Delete</td>
          </tr>
          ;
        </table>
      ))}
    </div>
  );
}

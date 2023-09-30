import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

export default function List() {
  const [list, setList] = useState([]);
  const [displayedList, setDisplayedList] = useState([]);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/todos'
    ).then((res) => res.json());
    setList(response);
    setDisplayedList(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setDisplayedList(
      list.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className='p-20'>
      <h1 className='text-2xl font-semibold mb-4'>To Do List</h1>
      <div className='mb-5'>
        <input
          className='border border-gray-300 rounded-lg py-2 px-4 w-full outline-none'
          value={input}
          onChange={onInputChange}
          placeholder='Filter items'
        />
      </div>
      <div>
        {displayedList.map((item) => (
          <ListItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

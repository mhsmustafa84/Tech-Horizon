import React from 'react';

export default function ListItem({ item }) {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
      <div className='mb-2'>
        <span className='mr-2'>Title:</span>
        <span className='text-blue-500 font-semibold text-lg'>
          {item.title}
        </span>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <span className='mr-2'>ID:</span>
          <span className='text-blue-500'>{item.id}</span>
        </div>
        <div className='flex items-center'>
          <span className='mr-2'>User ID:</span>
          <span className='text-blue-500'>{item.userId}</span>
        </div>
        <div className='flex items-center'>
          <span className='mr-2'>Completed:</span>
          <span
            className={`${item.completed ? 'text-green-500' : 'text-red-500'}`}
          >
            {item.completed ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    </div>
  );
}

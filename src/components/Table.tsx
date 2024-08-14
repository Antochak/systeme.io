'use client';

import {useState} from 'react';
import {formatDate} from '~/utils/formatDate';

interface TableProps<T> {
  data: T[];
  columns: (keyof T)[];
  onEdit: (item: T) => void;
}

export const Table = <T,>({data, columns, onEdit}: TableProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) =>
    columns.some((column) =>
      item[column]?.toString().toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  return (
    <div className='p-4 bg-[#f4f5f7] rounded shadow-md max-w-6xl mx-auto w-full'>
      <div className='flex justify-between items-center mb-4'>
        <input
          type='text'
          placeholder='Search...'
          className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className='min-w-full table-auto border-collapse bg-white rounded'>
        <thead className='text-gray-600'>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column)}
                className='px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider bg-white border-b'
              >
                {String(column)}
              </th>
            ))}
            <th className='px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider bg-white border-b'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='text-gray-800'>
          {filteredData.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#f4f5f7]'} hover:bg-gray-200`}
            >
              {columns.map((column) => (
                <td key={String(column)} className='py-2 px-4 border-b'>
                  {typeof item[column] === 'string' &&
                  !Number.isNaN(Date.parse(item[column] as string))
                    ? formatDate(item[column] as string)
                    : typeof item[column] === 'object' && item[column] !== null
                    ? Object.entries(item[column])
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(', ')
                    : String(item[column])}
                </td>
              ))}
              <td className='px-6 py-4 border-b text-sm'>
                <button onClick={() => onEdit(item)} className='text-blue-600 hover:underline'>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

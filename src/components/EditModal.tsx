'use client';
import React, {useState} from 'react';

interface EditModalProps<T> {
  item: T;
  onSave: (updatedItem: T) => void;
  onClose: () => void;
}

export const EditModal = <T extends Record<string, any>>({
  item,
  onSave,
  onClose,
}: EditModalProps<T>) => {
  const [editableItem, setEditableItem] = useState(item);

  const handleChange = (key: keyof T, value: any) => {
    setEditableItem((prevItem) => ({
      ...prevItem,
      [key]: value,
    }));
  };

  const editableFields = Object.keys(item).filter((key) => {
    const value = item[key];
    return typeof value === 'string' && !Number.isNaN(Date.parse(value)) === false && key !== 'id';
  }) as (keyof T)[];

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg w-96 shadow-lg'>
        <h2 className='text-xl font-bold mb-4'>Edit Item</h2>
        {editableFields.map((field) => (
          <div key={String(field)} className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>{String(field)}</label>
            <input
              type='text'
              className='w-full p-2 border border-gray-300 rounded'
              value={editableItem[field] as string}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
        <div className='flex justify-end mt-4'>
          <button className='bg-gray-500 text-white px-4 py-2 rounded mr-2' onClick={onClose}>
            Cancel
          </button>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded'
            onClick={() => onSave(editableItem)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

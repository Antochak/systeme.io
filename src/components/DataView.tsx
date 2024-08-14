'use client';
import {useState} from 'react';
import {EditModal, Table} from '~/components';

type Props<T> = {
  initialData: T[];
};

export const DataView = <T extends {id: number}>({initialData}: Props<T>) => {
  const [data, setData] = useState<T[]>(initialData);
  const [editingItem, setEditingItem] = useState<T | null>(null);

  const handleEdit = (item: T) => {
    setEditingItem(item);
  };

  const handleSave = (updatedItem: T) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
    setEditingItem(null);
  };

  return (
    <div className='flex flex-col items-center p-44 w-full m-auto'>
      <h1 className='text-2xl font-bold mb-4'>Data</h1>
      <Table data={data} columns={Object.keys(initialData[0]) as (keyof T)[]} onEdit={handleEdit} />
      {editingItem && (
        <EditModal item={editingItem} onSave={handleSave} onClose={() => setEditingItem(null)} />
      )}
    </div>
  );
};

import {Suspense} from 'react';
import {DataView} from '~/components';
import {data} from '~/data/data';

export default function ProductsPage() {
  const dataKey = 'Products';
  const initialData = data[dataKey];

  return (
    <Suspense fallback={'Loading...'}>
      <DataView initialData={initialData} tableTitle={dataKey} />
    </Suspense>
  );
}

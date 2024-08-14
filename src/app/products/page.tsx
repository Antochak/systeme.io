import {Suspense} from 'react';
import {DataView} from '~/components';
import {PAGEKEY} from '~/data/constants';
import {data} from '~/data/data';

export default function ProductsPage() {
  const dataKey = PAGEKEY.PRODUCTS;
  const initialData = data[dataKey];

  return (
    <Suspense fallback={'Loading...'}>
      <DataView initialData={initialData} tableTitle={dataKey} />
    </Suspense>
  );
}

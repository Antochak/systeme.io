import {Suspense} from 'react';
import {DataView} from '~/components';
import {data} from '~/data/data';

export default function PricePlansPage() {
  const dataKey = 'Price plans';
  const initialData = data[dataKey];

  return (
    <Suspense fallback={'Loading...'}>
      <DataView initialData={initialData} tableTitle={dataKey} />
    </Suspense>
  );
}

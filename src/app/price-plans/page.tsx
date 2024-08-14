import {Suspense} from 'react';
import {DataView} from '~/components';
import {PAGEKEY} from '~/data/constants';
import {data} from '~/data/data';

export default function PricePlansPage() {
  const dataKey = PAGEKEY.PRICE_PLANS;
  const initialData = data[dataKey];

  return (
    <Suspense fallback={'Loading...'}>
      <DataView initialData={initialData} tableTitle={dataKey} />
    </Suspense>
  );
}

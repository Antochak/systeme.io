import {Suspense} from 'react';
import {DataView} from '~/components';
import {Plans} from '~/data';
import type {PricePlanType} from '~/data/types';

export default function PricePlansPage() {
  const initialData: PricePlanType[] = Plans;
  return (
    <Suspense fallback={'Loading...'}>
      <DataView initialData={initialData} />
    </Suspense>
  );
}

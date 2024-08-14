import {Suspense} from 'react';
import {DataView} from '~/components';
import {Products} from '~/data';
import type {ProductType} from '~/data/types';

export default function ProductsPage() {
  const initialData: ProductType[] = Products;
  return (
    <Suspense fallback={'Loading...'}>
      <DataView initialData={initialData} />
    </Suspense>
  );
}

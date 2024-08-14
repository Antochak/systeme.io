import {Suspense} from 'react';
import {DataView} from '~/components';
import {Pages} from '~/data';
import type {PageType} from '~/data/types';

export default function PagesPage() {
  const initialData: PageType[] = Pages;
  return (
    <Suspense fallback={'Loading...'}>
      <DataView initialData={initialData} />
    </Suspense>
  );
}

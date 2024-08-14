export default function Home() {
  return (
    <div className='flex flex-col gap-2 p-[50px]'>
      <a href={'/products'}>
        <h1 className='text-slate-800 text-4xl  hover:text-blue-400'>Products</h1>
      </a>
      <a href={'/price-plans'}>
        <h1 className='text-slate-800 text-4xl hover:text-blue-400'>Plans</h1>
      </a>
      <a href={'/pages'}>
        <h1 className='text-slate-800 text-4xl  hover:text-blue-400'>Pages</h1>
      </a>
    </div>
  );
}

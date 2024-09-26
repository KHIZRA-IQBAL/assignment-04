// app/page.tsx
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='bg-slate-800 h-screen grid place-items-center text-white'>
      <h1 className='text-4xl'>Welcome to the Next.js </h1>
      <p className='h-[200px] bg-cover w-[800px] flex items-center p-4 text-xl text-emerald-1000 bg-opacity-55 font-bold  border border-solid'>This application demonstrates data fetching with SSR and SSG,but before it you have need to signup then you can see our fetching Data. this application  for those who wanted to build their knowlagde in some tecnology.</p>
      <h2 className=' text-2xl '>FOR MOVE ON:</h2>
      <nav className='gap-4'>
        <ul>
          <li>
            <Link href="/login" className='border border-solid pr-4 pl-4'>Login</Link>
          </li>
         </ul>
      </nav>
    </div>
  );
};

export default Home;

 

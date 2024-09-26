// app/login/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      // Set a simple cookie for the token (in a real app, use httpOnly cookies)
      document.cookie = `token=fake-token; path=/`;
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='text-center bg-slate-800 h-screen  text-white flex justify-center items-center flex-col'>
      <h1 className='pb-10 pt-0 text-5xl'>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}className='flex justify-center items-center flex-col gap-10   border  border-l-amber-50 w-[700px] p-10 rounded-lg'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
         className='p-2 text-slate-800'/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        className="mb-10 p-2  text-slate-800"/>
        <br />
        <button type="submit" className='border border-white p-1 pl-4 pr-4 hover:text-slate-400'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

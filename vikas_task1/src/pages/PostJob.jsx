import React from 'react';
import { Link } from 'react-router-dom';

function PostJob() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Post a Job</h1>
      <form action="" className='flex flex-col gap-6 border-black border-2'>
        <input type="text" placeholder='Enter Job Title:' />
        <input type="text" placeholder='Enter Company Name:' />
        <input type="text" placeholder='Enter City:' />
        <input type="text" placeholder='Enter Country:' />
        <Link to='/jobs'>
        <button className='bg-cyan-400 w-20 h-12'>Post</button>
        </Link>
      </form>
    </div>
  );
}

export default PostJob;


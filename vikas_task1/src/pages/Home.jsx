import React from 'react';
import JobSearch from '../components/JobSearch';
import JobListings from '../components/JobListings';

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Job Board</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <JobSearch />
        <JobListings />
      </div>
    </div>
  );
}

export default Home;


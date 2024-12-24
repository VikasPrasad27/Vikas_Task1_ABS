import React from 'react';
import JobListings from '../components/JobListings';

function Jobs() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">All Jobs</h1>
      <JobListings />
    </div>
  );
}

export default Jobs;


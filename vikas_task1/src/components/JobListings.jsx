import React from 'react';

function JobListings() {

  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'Pune, India' },
    { id: 2, title: 'Product Manager', company: 'Startup Inc', location: 'Mumbai,India' },
    { id: 3, title: 'Data Scientist', company: 'Big Data Corp', location: 'Ranchi,India' },
    { id: 4, title: 'UX Designer', company: 'Design Studio', location: 'Kolkata,India' },
    { id: 5, title: 'Marketing Specialist', company: 'Growth Hackers', location: 'Delhi,India' },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Latest Job Listings</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            <h3 className="text-lg font-medium text-blue-600">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 focus:outline-none">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobListings;


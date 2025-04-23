import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import SearchBar from './SearchBar';
import NewJobForm from './NewJobForm'; 

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:8000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  // 🔹 Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = query
      ? jobs.filter(job => job.title.toLowerCase().includes(query.toLowerCase()))
      : jobs;
    setFilteredJobs(filtered);
  };

  // 🔹 Add new job
  const handleAddJob = (newJob) => {
    setJobs(prev => [...prev, newJob]);
    setFilteredJobs(prev => [...prev, newJob]);
  };

  return (
    <div className="job-board max-w-4xl mx-auto p-4">
      <NewJobForm onAddJob={handleAddJob} />
      <SearchBar onSearch={handleSearch} />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default JobBoard;

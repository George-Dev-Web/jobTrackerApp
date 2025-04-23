import React, { useState } from 'react';

const NewJobForm = ({ onAddJob }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!title || !company || !location || !type) {
      alert('Please fill in all fields.');
      return;
    }

    const newJob = { title, company, location, type };

    fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddJob(data);
        
        setTitle('');
        setCompany('');
        setLocation('');
        setType('');
      })
      .catch((err) => console.error('Error adding job:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Job Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={company}
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        value={type}
        placeholder="Job Type (e.g., Full-time, Remote)"
        onChange={(e) => setType(e.target.value)}
      />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default NewJobForm;

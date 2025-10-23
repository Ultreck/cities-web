'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { CreatePostModal, PostData } from './CreatePostModal';
import { JobCard } from './JobCard';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  description: string;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Startup Inc',
    location: 'New York, NY',
    salary: '$120k - $150k',
    type: 'Full-time',
    postedDate: '2 days ago',
    description: 'We are looking for an experienced software engineer to join our growing team.',
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'Global Marketing Co',
    location: 'Remote',
    salary: '$80k - $100k',
    type: 'Full-time',
    postedDate: '1 week ago',
    description: 'Lead our marketing initiatives and drive brand growth across multiple channels.',
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Design Studio',
    location: 'Los Angeles, CA',
    salary: '$90k - $120k',
    type: 'Full-time',
    postedDate: '3 days ago',
    description: 'Create beautiful and functional user experiences for our innovative products.',
  },
  {
    id: '4',
    title: 'Data Analyst',
    company: 'Analytics Pro',
    location: 'Chicago, IL',
    salary: '$70k - $90k',
    type: 'Full-time',
    postedDate: '5 days ago',
    description: 'Analyze data and provide insights to drive business decisions.',
  },
  {
    id: '5',
    title: 'Sales Representative',
    company: 'Sales Solutions Ltd',
    location: 'Miami, FL',
    salary: '$60k - $80k',
    type: 'Full-time',
    postedDate: '1 week ago',
    description: 'Build relationships and close deals with our enterprise clients.',
  },
  {
    id: '6',
    title: 'Content Writer',
    company: 'Digital Media',
    location: 'Remote',
    salary: '$50k - $70k',
    type: 'Part-time',
    postedDate: '4 days ago',
    description: 'Create engaging content for our blog, social media, and marketing materials.',
  },
];

export default function Jobs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState<Job[]>(mockJobs);

  const handleCreateJob = (data: PostData) => {
    const newJob: Job = {
      id: String(jobs.length + 1),
      title: data.title,
      company: data.category || 'Company Name',
      location: data.location || 'TBD',
      salary: data.salary || 'Negotiable',
      type: 'Full-time',
      postedDate: 'Just now',
      description: data.description,
    };
    setJobs([newJob, ...jobs]);
    setIsModalOpen(false);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Job Opportunities</h1>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Post new job
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search jobs by title, company, or location..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            {...job}
            onApply={() => console.log('Applied to:', job.title)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No jobs found matching your search.</p>
        </div>
      )}

      {/* Create Job Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        title="Post new job"
        description="Post a job opening for the community"
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateJob}
        type="job"
      />
    </div>
  );
}


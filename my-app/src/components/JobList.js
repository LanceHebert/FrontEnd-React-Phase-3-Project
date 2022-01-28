import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import uuid from 'react-uuid'



function JobList({ rubyUser,field,updateDisplay }) {


  
  const displayJobCards = rubyUser.map((job) => {
    return <JobCard key={uuid()} job={job} field={field} updateDisplay={updateDisplay} />;
  });

  return (
    <div>
     
      {displayJobCards}
    </div>
  );
}

export default JobList;

// displayData will be coming from the json fetch request
// let jobs
// if (sort.length === 0){
//      jobs = displayData.map (application => <JobCard companyName={companyName} jobTitle={jobTitle} applicationDate{applicationDate} followUpDate={followUpDate}/>)
// }

// //<JobCard
// key={episode.id}
// episode={episode}
// podcastObj={podcastObj}
// dbJSON={dbJSON}
// />

// read jobs
// function GetJobs() {
//   const [user, setUser] = useState("");
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:9292/users/${jobs}`)
//       .then((r) => r.json())
//       .then((jobs) => setUser(jobs));
//   }, []);

// function handleAddJob(newJob) {
//     setJobs([...jobs, newJob]);
//   }

// function handleDeleteJob(deletedJob) {
//   const updatedJobs = jobs.filter((job) => job.id !== deletedjob.id);
//   setJobs(updatedJobs);
// }

//   const jobsToDisplay = jobs.filter((job) => {
//     if (selectedJob === job.id) return true;

//     return job.category === selectedJob;
//   });

//   return (
//     <div className="JobList">
//       <InputForm onAddJob={handleAddJob} />
//       <JobList
//         job={selectedJob}
//       />
//       <ul className="Jobs">
//         {jobsToDisplay.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Delete Jobs

// function handleDeleteClick() {
//   fetch(`http://localhost:9292/jobs/${job.id}`, {
//     method: "DELETE",
//   })
//     .then((r) => r.json())
//     .then(() => onDeleteJob(jobs));
// }

// // Update jobs

//  function handleUpdateJob() {
//   fetch(`http://localhost:9292/jobs/${job.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       isInCollection: !job.isInCollection,
//     }),
//   })
//     .then((r) => r.json())
//     .then((updatedJob) => console.log(updatedJob));
//  }

//   return (
//     <li className={item.isInCart ? "in-cart" : ""}>
//       <span>{item.name}</span>
//       <span className="collection">{job.collection}</span>
//       <button
//         className={job.isInCollection ? "remove" : "add"}
//         onClick={handleUpdateJob}
//       >
//         {job.isInCollection ? "Remove From" : "Add To"} Jobs
//       </button>
//       <button className="remove">Remove</button>
//     </li>
//   );
// }

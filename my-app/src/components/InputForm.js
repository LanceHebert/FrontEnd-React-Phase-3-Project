import React from "react";
import { useState } from "react";

function InputForm({ onAddJob }) {
  const [formData, setFormData] = useState({    
    companyName: "",
    jobTitle: "",
    location: "",
    EmploymentType: "",
    WorkSite: "",
    JobURL: "",
    salary: 0,  
  });

  const handleSubmit = (e) => {
    e.preventDefault();    

    fetch("http://localhost:9292/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newJob) => onAddJob(newJob));
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Company Name
            <input
              value={formData.companyName}
              type="text"
              id="companyName"
              name="companyName"
              placeholder=""
              onChange={(e) => setFormData(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Job Title
            <input
              value={formData.jobTitle}
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder=""
              onChange={(e) => setFormData(e.target.value)}
            />
          </label>
        </div>
        
        <div>
          <label>
          Location
            <input
              value={formData.location}
              type="text"
              id="location"
              name="location"
              placeholder=""
              onChange={(e) => setFormData(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          Employment Type
            <input
              value={formData.employmentType}
              type="text"
              id="employmentType"
              name="employmentType"
              placeholder=""
              onChange={(e) => setFormData(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          Work Site
            <input
              value={formData.workSite}
              type="text"
              id="workSite"
              name="workSite"
              placeholder=""
              onChange={(e) => setFormData(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          Job Url
            <input
              value={formData.jobURL}
              type="text"
              id="jobURL"
              name="jobURL"
              placeholder=""
              onChange={(e) => setFormData(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          Salary
            <input
              value={formData.salary}
              type="text"
              id="salary"
              name="salary"
              placeholder=""
              onChange={(e) => setFormData(e.target.value)}
            />
          </label>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputForm;



import React from "react";
import { useState } from "react";

function InputForm({ onAddJob }) {
  
  const [formField, setFormField] = useState({
    company_name: "",
    job_title: "",
    location: "",
    employment_type: "",
    work_site: "",
    job_url: "",
    salary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    

    fetch("http://localhost:9292/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formField),
      
    })
      // .then((r) => r.json())
      // .then((newJob) => {
      //   console.log(newJob)
      // });
      // .catch((err) => console.log(err))
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Company Name
            <input
              value={formField.company_name}
              type="text"
              id="company_name"
              name="company_name"
              placeholder=""
              onChange={(e) => setFormField({...formField, company_name: e.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Job Title
            <input
              value={formField.job_title}
              type="text"
              id="job_title"
              name="job_title"
              placeholder=""
              onChange={(e) => setFormField({...formField, job_title: e.target.value})}
            />
          </label>
        </div>

        <div>
          <label>
            Location
            <input
              value={formField.location}
              type="text"
              id="location"
              name="location"
              placeholder=""
              onChange={(e) => setFormField({...formField, location: e.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Employment Type
            <input
              value={formField.employment_type}
              type="text"
              id="employment_type"
              name="employment_type"
              placeholder=""
              onChange={(e) => setFormField({...formField, employment_type: e.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Work Site
            <input
              value={formField.work_site}
              type="text"
              id="work_site"
              name="work_site"
              placeholder=""
              onChange={(e) => setFormField({...formField, work_site: e.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Job Url
            <input
              value={formField.job_url}
              type="text"
              id="job_url"
              name="job_url"
              placeholder=""
              onChange={(e) => setFormField({...formField, job_url: e.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Salary
            <input
              value={formField.salary}
              type="text"
              id="salary"
              name="salary"
              placeholder=""
              onChange={(e) => setFormField({...formField, salary: e.target.value})}
            />
          </label>
        </div>

        <button type="Submit">Add Job</button>
      </form>
    </div>
  );
}

export default InputForm;

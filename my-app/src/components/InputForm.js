import React from "react";
import { useState } from "react";

function InputForm({ onAddJob, updateJobDisplay, field, lang, setLang ,updateLangDisplay}) {
  const [formField, setFormField] = useState({
    company_name: "",
    job_title: "",
    location: "",
    employment_type: "",
    work_site: "",
    job_url: "",
    salary: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("What we enterd", field);
    const fieldSet = field.name

    fetch(`http://localhost:9292/users/${fieldSet}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({formField:formField,lang:lang}),
    })
      // .then((r) => console.log("R here",r))
      .then((newJob) => {
        console.log(newJob);
        updateJobDisplay(formField);
        updateLangDisplay(lang)
      });

    // fetch(`http://localhost:9292/languages/`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(lang),
    // })
    //   // .then((r) => console.log("R here",r))
    //   .then((newJob) => {
    //     console.log(newJob);
    //   });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="submitForm">
          <label>Company Name</label>
          <input
            value={formField.company_name}
            type="text"
            id="company_name"
            name="company_name"
            placeholder=""
            onChange={(e) =>
              setFormField({ ...formField, company_name: e.target.value })
            }
          />
        </div>
        <div id="submitForm">
          <label>Job Title</label>
          <input
            value={formField.job_title}
            type="text"
            id="job_title"
            name="job_title"
            placeholder=""
            onChange={(e) =>
              setFormField({ ...formField, job_title: e.target.value })
            }
          />
        </div>

        <div id="submitForm">
          <label>Location</label>
          <input
            value={formField.location}
            type="text"
            id="location"
            name="location"
            placeholder=""
            onChange={(e) =>
              setFormField({ ...formField, location: e.target.value })
            }
          />
        </div>
        <div id="submitForm">
          <label>Employment Type</label>
          <input
            value={formField.employment_type}
            type="text"
            id="employment_type"
            name="employment_type"
            placeholder=""
            onChange={(e) =>
              setFormField({ ...formField, employment_type: e.target.value })
            }
          />
        </div>
        <div id="submitForm">
          <label>Work Site</label>
          <input
            value={formField.work_site}
            type="text"
            id="work_site"
            name="work_site"
            placeholder=""
            onChange={(e) =>
              setFormField({ ...formField, work_site: e.target.value })
            }
          />
        </div>
        <div id="submitForm">
          <label>Job Url</label>
          <input
            value={formField.job_url}
            type="text"
            id="job_url"
            name="job_url"
            placeholder=""
            onChange={(e) =>
              setFormField({ ...formField, job_url: e.target.value })
            }
          />
        </div>
        <div id="submitForm">
          <label>Salary</label>
          <input
            value={formField.salary}
            type="text"
            id="salary"
            name="salary"
            placeholder=""
            onChange={(e) =>
              setFormField({ ...formField, salary: e.target.value })
            }
          />
        </div>
        <div id="submitForm">
          <label>Languages</label>
          <input
            value={lang.language}
            type="text"
            id="language"
            name="language"
            placeholder=""
            onChange={(e) =>
              setLang({ ...lang, language: e.target.value })
            }
          />
        </div>
        <button id="submitButton">Add Job</button>
      </form>
    </div>
  );
}

export default InputForm;

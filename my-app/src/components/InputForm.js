import React from "react";
import { useState } from "react";

function InputForm() {
  
    const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    applicationDate: "",
    followUpDate: "",
  });

  const handleSubmit = (e) => {
      e.preventDefault()
      setFormData({
        companyName: "",
        jobTitle: "",
        applicationDate: "",
        followUpDate: "",
      })
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label>
            Company Name
          <input
            value={formData.companyName}
            type="text"
            id="CompanyName"
            name="CompanyName"
            placeholder=""
            onChange={null}
          />
        </label>

        <label>
            Job Title
          <input
            value={formData.jobTitle}
            type="text"
            id="JobTitle"
            name="JobTitle"
            placeholder=""
            onChange={null}
          />
        </label>

        <label>
            Application Date
          <input
            value={formData.applicationDate}
            type="text"
            id="ApplicationDate"
            name="ApplicationDate"
            placeholder=""
            onChange={null}
          />
        </label>

        <label>
            Follow-Up Date
          <input
            value={formData.applicationDate}
            type="text"
            id="FollowUpDate"
            name="FollowUpDate"
            placeholder=""
            onChange={null}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputForm;

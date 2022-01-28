import React, { useEffect,useState } from "react";
import { Card, Button } from "react-bootstrap";

function JobCard({ job, setField, updateDisplay }) {
  const [deep,setDeep]=useState("")

  useEffect(() => {
    console.log("We are Loading.....");
    fetchEverything();
  }, []);

  function handleDelete() {
    fetch(`http://localhost:9292/jobs/${job.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleted) => {
        return updateDisplay(job.id);
      });
  }

  function fetchEverything() {
    fetch("http://localhost:9292/jobs")
      .then((r) => r.json())
      .then((data) => {
        const langArray = data.map((slice) => {
          if (slice.id === job.id) {
            return slice.languages;
          }
          return null;
        });

        const mapLang = langArray.filter(piece => piece !== null)        
        const deeperMap = mapLang.map(langSlice => langSlice.map(deeperSlice=>deeperSlice.language))
        
        setDeep(deeperMap[0].join(", "))
      });
  }

  return (
    <div>
      <Card className="text-center">
        <Card.Header>{job.company_name}</Card.Header>
        <Card.Body>
          <Card.Title>{job.job_title} </Card.Title>
          <Card.Text>
            {job.employment_type} {job.location} <br></br>
            {job.job_url} {job.work_site} <br></br> ${job.salary}<br></br>
            {deep}
          </Card.Text>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{job.created_at}</Card.Footer>
      </Card>
    </div>
  );
}

export default JobCard;

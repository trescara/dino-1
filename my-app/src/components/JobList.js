import React from "react";

class JobList extends React.Component {
  render() {
    return (
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
          {this.props.jobs.map(job => {
            return (
              <li key={job.title}>
                <h4>{job.title}</h4>
                <small>{job.pay}</small>
                <p>{job.description}</p>
                <small>
                  {job.interested.length} dinos are interested in this job
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default JobList;

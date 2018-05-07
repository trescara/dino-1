import React from 'react';

const JobForm = (props) => {
  return (
    <main>
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">

        </ul>
      </section>
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form class="job-form">
          <label for="title">Title</label>
          <input type="text" name="title">
          <label for="pay">Compensation</label>
          <input type="text" name="pay">
          <label for="description">Description</label>
          <textarea name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    </main>
  )
}

export default JobForm;
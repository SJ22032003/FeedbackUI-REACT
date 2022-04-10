import React from "react";
import {Link} from 'react-router-dom'
import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>
          This Feedback UI project was made using React with React-Router-DOM.
          Pages are dynamicaly loaded.
        </p>
        <span>
          <strong>React:</strong> <sup>^</sup>18.0.0 <br />
          <strong>React-router-dom:</strong> <sup>^</sup>6.3.0
        </span>
        <br />
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;

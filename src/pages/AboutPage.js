import React from "react";
import {Link} from 'react-router-dom'
import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>
          This Feedback UI project was made using React and React-Router-DOM.
          Hooks such as useState , useEffect and useContext(for state-management) are used. 
          Data is send to JSON Server(backend)
          Pages are dynamicaly loaded.
        </p>
        <span>
          <strong>React:</strong> <sup>^</sup>18.0.0 <br />
          <strong>React-router-dom:</strong> <sup>^</sup>6.3.0<br />
          <strong>Heroku:</strong> <sup>^</sup>17.60.0<br />
          <strong>JSON Server:</strong> <sup>^</sup>0.17.0<br />
          <strong>Netlify</strong><br />
          <li>created by <a href="https://www.linkedin.com/in/shobhit-jaryal/">Shobhit Jaryal</a></li>
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

import React from "react";
import "../education/education.css";

const Education = () => {
  return (
    <div className="education">
      <h2>EDUCATION</h2>
      <ul>
        <li>
          <h3>University Technician</h3>
          <p>
            Currently enrolled in the University Technician Degree in
            Programming (TUP) at the National Technological University
          </p>
        </li>
        <li>
          <h3>National University of Rosario</h3>
          <p>
            I passed 15 subjects from the Public Accounting program at the
            National University of Rosario (2012 - 2017)
          </p>
        </li>
        <li>
          <h3>High School</h3>
          <p>
            High School Diploma in Economics and Management of Organizations.
            ISPI N° 9085 "Santa Rosa de Viterbo". San Lorenzo, Santa Fe. (2011)
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Education;

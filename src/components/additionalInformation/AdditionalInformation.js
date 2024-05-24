// src/components/AdditionalInformation.js
import React from "react";
import "../additionalInformation/additionalInformation.css";

const AdditionalInformation = () => {
  return (
    <div className="additional-information">
      <h2>ADDITIONAL INFORMATION</h2>
      <ul>
        <li>
          Language: English, between pre-intermediate and intermediate level (A2
          - B1)
        </li>
        <li>
          Technologies used in TUP: PSeint, C Language, Python, C#, React,
          Javascript (quarterly courses)
        </li>
        <li>
          Completed courses on Object-Oriented Programming on Udemy in 2020
        </li>
        <li>
          {" "}
          2017 – 2018: Freelance web page development. Proficient in HTML 5, CSS
          3, Bootstrap 4, and JavaScript.
        </li>
        <li>
          {" "}
          Computer Skills: Proficient in Windows, Microsoft Office Pack, Apache
          Office, Google Docs Spreadsheet and Google Slides,
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;

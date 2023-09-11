import React from "react";
import "../App.css";
import "./Skills.css";
import "../App.css";

const Skills = () => {
  return (
    <div className="SkillsContainer">
      <div className="SkillsCards">
        <div className="SkillCard TechnicalSkills">
          <h3>Technical Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Ruby</li>
            <li>Git</li>
            <li>PostgreSQL</li>
            <li>Postman</li>
            <li>React</li>
            <li>Ruby on Rails</li>
            <li>Cypress</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="SkillCard SoftSkills">
          <h3>Soft Skills</h3>
          <ul>
            <li>Time Management</li>
            <li>Organization</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Critical Thinking</li>
            <li>Problem Solving</li>
            <li>Project Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

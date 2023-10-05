import React from "react";
import "../App.css";
import "./Skills.css";
import "../App.css";

const Skills = () => {
  return (
    <div className="SkillsContainer">
      <div className="SkillsCards">
        <div className="SkillCard Skills">
          <h3>Languages and Frameworks</h3>
          <ul>
            <li>JavaScript</li>
            <li>C#</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>Ruby</li>
            <li>React</li>
            <li>.NET</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>
        <div className="SkillCard Skills">
          <h3>Testing</h3>
          <ul>
            <li>Jest</li>
            <li>RSpec</li>
            <li>Cypress</li>
            <li>E2E Testing</li>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
          </ul>
        </div>
        <div className="SkillCard Skills">
          <h3>Technologies</h3>
          <ul>
            <li>Devise</li>
            <li>auth0</li>
            <li>PGAdmin</li>
            <li>Postman</li>
            <li>Git</li>
            <li>Github</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="SkillCard Skills">
          <h3>General</h3>
          <ul>
            <li>Miro</li>
            <li>Linear</li>
            <li>Trello</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>
        <div className="SkillCard Skills">
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

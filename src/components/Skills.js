import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'Italian', level: 'B1' },
        { name: 'French', level: 'A1' },
        { name: 'Japanese', level: 'A1' },
      ]
    },
    {
      category: 'Technical Skills',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'SQL', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'Tableau', level: 'Advanced' },
        { name: 'Swift', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Excel', level: 'Advanced' },
        { name: 'Power BI', level: 'Intermediate' },
      ]
    },
    {
      category: 'Admin & Operations',
      skills: [
        { name: 'Executive Support', level: 'Expert' },
        { name: 'Document Management', level: 'Expert' },
        { name: 'Stakeholder Communication', level: 'Advanced' },
        { name: 'Process Optimization', level: 'Advanced' },
        { name: 'Calendar Management', level: 'Expert' },
        { name: 'Meeting Coordination', level: 'Expert' },
      ]
    },
    {
      category: 'Project Management',
      skills: [
        { name: 'Agile Methodology', level: 'Advanced' },
        { name: 'Task Prioritization', level: 'Expert' },
        { name: 'Budget Tracking', level: 'Advanced' },
        { name: 'Resource Planning', level: 'Advanced' },
        { name: 'Risk Assessment', level: 'Advanced' },
        { name: 'Team Coordination', level: 'Advanced' },
      ]
    },
    {
      category: 'Compliance & Audit',
      skills: [
        { name: 'Internal Process Audits', level: 'Advanced' },
        { name: 'Policy Development', level: 'Advanced' },
        { name: 'Compliance Management', level: 'Advanced' },
        { name: 'Security Assessments', level: 'Advanced' },
        { name: 'Regulatory Compliance', level: 'Advanced' },
        { name: 'Internal Controls', level: 'Advanced' },
        { name: 'Risk Management', level: 'Advanced' },
        { name: 'Audit Documentation', level: 'Expert' },
      ]
    },
    {
      category: 'AI & Emerging Tech',
      skills: [
        { name: 'Prompt Engineering', level: 'Advanced' },
        { name: 'ChatGPT', level: 'Advanced' },
        { name: 'Claude AI', level: 'Advanced' },
        { name: 'AI Workflow Integration', level: 'Intermediate' },
      ]
    }
  ];

  const getLevelClass = (level) => {
    const levelMap = {
      // Language levels (CEFR)
      'Native': 'level-native',
      'Fluent': 'level-fluent',
      'C2': 'level-c2',
      'C1': 'level-c1',
      'B2': 'level-b2',
      'B1': 'level-b1',
      'A2': 'level-a2',
      'A1': 'level-a1',
      // Skill levels
      'Expert': 'level-expert',
      'Advanced': 'level-advanced',
      'Intermediate': 'level-intermediate',
      'Beginner': 'level-beginner'
    };
    return levelMap[level] || 'level-intermediate';
  };

  const toggleCategory = (categoryIndex) => {
    setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex);
  };

  return (
    <section className="skills-section content-wrapper">
      <h4 className="stats-title">My Skills</h4>
      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`skill-category brutal-card ${expandedCategory === categoryIndex ? 'expanded' : 'collapsed'}`}
          >
            <button
              className="category-header"
              onClick={() => toggleCategory(categoryIndex)}
              aria-expanded={expandedCategory === categoryIndex}
              aria-controls={`skills-list-${categoryIndex}`}
            >
              <h5 className="category-title mono">
                {category.category}
                <span className="skill-count">({category.skills.length})</span>
              </h5>
              <span className="expand-icon">{expandedCategory === categoryIndex ? '−' : '+'}</span>
            </button>

            <div
              id={`skills-list-${categoryIndex}`}
              className="skills-list"
              aria-hidden={expandedCategory !== categoryIndex}
            >
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className={`skill-level ${getLevelClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import Album from './Album';    


    
const courses = [
    {
      title: "Full Stack Development",
      description: "Learn to build dynamic web applications using technologies like HTML, CSS, JavaScript, and backend frameworks.",
    },
    {
      title: "Data Science",
      description: "Dive into data analysis, machine learning, and statistical techniques to extract insights from data.",
    },
    {
      title: "Cyber Security",
      description: "Understand the principles of securing systems and networks, and learn to protect against cyber threats.",
    },
    {
      title: "Career Development",
      description: "Enhance your job readiness with skills in resume writing, interview preparation, and professional networking.",
    },
  ];
  
  const All = () => {
    return (
      <div className="all-courses">
        {courses.map((course, index) => (
          <Album key={index} title={course.title} description={course.description} />
        ))}
      </div>
    );
  };  


export default All;
import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
  const sectionStyle = {
    backgroundColor: '#1E3A8A', // Dark blue background color
    minHeight: '800px', // Minimum height for the section
    padding: '60px 0', // Adjust padding as needed
  };

  const titleStyle = {
    fontSize: '2.5rem', // Font size for the title
    fontWeight: 'bold', // Bold font weight for the title
    color: '#FFFFFF', // White color for the title text
    marginBottom: '20px', // Margin bottom for the title
  };

  const subtitleStyle = {
    color: '#FFFFFF', // White color for the subtitle text
    marginBottom: '40px', // Margin bottom for the subtitle
  };

  return (
    <section id='portfolio' style={sectionStyle}>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block' style={titleStyle}>
            My Latest Work
          </h2>
          <p className='subtitle' style={subtitleStyle}>
            Here are some projects that I have done recently 
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;

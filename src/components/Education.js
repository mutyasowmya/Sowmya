import React from 'react';

const Education = () => {
  const cardStyle = {
    backgroundColor: '#1E3A8A', // Blue background color for the card
    borderRadius: '8px', // Rounded corners for the card
    padding: '20px', // Padding within the card
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for the card
    marginBottom: '20px', // Margin bottom between cards
  };

  const titleStyle = {
    fontSize: '1.5rem', // Font size for the title
    fontWeight: 'bold', // Bold font weight for the title
    color: '#FFFFFF', // White color for titles on the blue background
    marginBottom: '10px', // Margin bottom for the title
  };

  const textStyle = {
    fontSize: '1rem', // Font size for the text
    color: '#FFFFFF', // White color for text on the blue background
  };

  return (
    <section id="education" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E3A8A' }}>
            Education
          </h2>
        </div>

        <div className="education-details">
          <div style={cardStyle}>
            <h3 style={titleStyle}>Master of Science in Computer Science</h3>
            <p style={textStyle}>Saint Louis University, Period: 2023-2025</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Electronics and communication engineering</h3>
            <p style={textStyle}>Jawaharlal Nehru Technological University, Period: 2017-2021</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Senior secondary</h3>
            <p style={textStyle}>Sri Chaitanya Junior College, Period: 2015-2017</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>Higher Secondary</h3>
            <p style={textStyle}>Atomic Energy Central School-2, Period: 2014-2015</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faHtml5,
  faJava,
  faAws,
  faCss3,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  // Define your technical skills and their proficiency levels
  const skillsData = [
    { name: 'Java', icon: faJava, percent: 80 },
    { name: 'AWS', icon: faAws, percent: 90 },
    { name: 'React', icon: faReact, percent: 75 },
    { name: 'HTML5', icon: faHtml5, percent: 90 },
    { name: 'CSS3', icon: faCss3, percent: 85 },
    { name: 'JavaScript', icon: faJs, percent: 80 },
    { name: 'Node.js', icon: faNodeJs, percent: 25 },
  ];

  // Function to calculate progress bar color based on skill level
  const getProgressBarColor = (percent) => {
    let color = '';
    if (percent >= 80) {
      color = 'linear-gradient(to right, #34D399, #22D3EE)';
    } else if (percent >= 50) {
      color = 'linear-gradient(to right, #FBBF24, #F87171)';
    } else {
      color = 'linear-gradient(to right, #F87171, #EF4444)';
    }
    return color;
  };

  return (
    <section className='bg-blue-200 py-12' id='skills'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-skills relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block text-blue-800'>
            Skills
          </h2>
          <p className='subtitle'>You can see my skills over here</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {skillsData.map((skill, index) => (
            <div key={index} className='p-4 bg-white rounded shadow-md'>
              <div style={{ width: '64px', height: '64px' }}>
                <FontAwesomeIcon
                  icon={skill.icon}
                  className='w-full h-full mb-4 text-2xl text-blue-600'
                />
              </div>
              <div className='relative pt-1'>
                <div className='flex mb-2 items-center justify-between'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-300'>
                      {skill.name}
                    </span>
                  </div>
                  <div className='text-right'>
                    <span className='text-xs font-semibold inline-block text-blue-600'>
                      {`${skill.percent}%`}
                    </span>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <div className='h-2 bg-blue-300 rounded-full'>
                      <div
                        style={{
                          width: `${skill.percent}%`,
                          background: getProgressBarColor(skill.percent),
                          transition: 'width 1s ease-in-out, background 1s ease-in-out',
                        }}
                        className='h-full bg-blue-600 rounded-full'
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

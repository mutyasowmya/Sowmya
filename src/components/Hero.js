import React from 'react';

// Import woman image
import img from '../assets/img/ProfilePhoto.jpeg';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-blue-500 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-white text-md mb-[22px]'>
              Welcome to my portfolio!! 
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-white'>
              Graduate <br /> Student
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-white'>
              {/* Add any additional text content here */}
            </p>
            <a href="https://mutyasowmya.github.io/project2/index.html" target="_blank" rel="noopener noreferrer">
              <button style={{ borderRadius: "5px" }} className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all text-white'>
                AboutMe
              </button>
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-center items-center'>
            <img
              style={{ maxHeight: '320px', maxWidth: '320px', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              src={img}
              alt=''
              className='object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

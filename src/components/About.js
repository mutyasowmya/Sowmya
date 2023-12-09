import React from "react";



const About = () => {
  return (
    <section className="section bg-blue-200" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-blue-900">
              SOWMYA MUTYA
            </h2>
            <p className="mb-2 text-accent font-semibold">Aspired Software Engineer</p>
            <hr className="mb-4 border-t-2 border-blue-900 w-16 lg:w-20" />
            <p className="mb-6 text-blue-900 text-lg leading-relaxed font-bold">
              A self-motivated and dedicated software engineer with a strong
              grasp of algorithms, programming concepts, and AWS cloud. I am
              passionate about software engineering with 18 months of experience
              and hold an AWS Certified Developer Associate certification. I'm
              actively engaged in learning and gaining expertise in the latest
              technologies such as cloud computing, Java, and Selenium. Education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

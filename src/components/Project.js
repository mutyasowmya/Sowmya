import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img
          className="rounded-2xl"
          src={item.image}
          alt=""
          style={{ width: '400px', height: '300px' }} // Set larger width and height
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3 text-white">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3 text-white">{item.name}</h3>
      <p className="text-base max-w-md text-white">{item.info}</p>
      <p className="text-base max-w-md text-white">Tech Stack : {item.tech}</p>
      <span style={{ marginTop: "10px" }}>
        {" "}
        <a href={item.github} target="_blank">
          <button
            style={{
              margin: "10px",
              borderRadius: "5px",
              border: "1px solid black",
              width: "100px",
              padding: "4px",
              color: "black", // Text color of the button
            }}
          >
            Project{" "}
          </button>
        </a>{" "}
      </span>
    </div>
  );
};

export default Project;

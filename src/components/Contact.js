import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send(
        "service_001",
        "template_001",
        {
          name: name,
          email: email,
          message: message,
        },
        "OhT6WutZWTbaUFTp0"
      )
      .then(
        function (response) {
          console.log("Email sent!", response);
          alert("Email sent successfully!");
        },
        function (error) {
          console.error("Email sending failed:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div style={{ backgroundColor: "#121212", padding: "20px", color: "#FFFFFF" }}>
      <center>
        <section id="contact">
          <h2 style={{ color: "#E0E7FF" }}><strong>Contact Me</strong></h2>

          <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required style={{ backgroundColor: "#E0E7FF", color: "#121212" }} />
            <br />
            <br />
            <input type="email" id="email" placeholder="Your Email" required style={{ backgroundColor: "#E0E7FF", color: "#121212" }} />
            <br />
            <br />
            <textarea
              id="message"
              placeholder="Your Message"
              required
              style={{ backgroundColor: "#E0E7FF", color: "#121212" }}
            ></textarea>
            <br />
            <br />
            <button
              className="mt-4 px-4 py-2 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              type="button"
              onClick={sendEmail}
              style={{ backgroundColor: "#2F80ED" }}
            >
              Send Message
            </button>
          </form>
        </section>
      </center>
    </div>
  );
};

export default Contact;

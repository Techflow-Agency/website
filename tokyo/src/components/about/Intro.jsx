import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Victor Gallo",
    designation: "Web Developer",
    text: (
      <>
        <p>
        Experienced and enthusiastic professional with a diverse background in web development, sales, and financial advisory. 

        Possessing 7 years of total experience, including 3 years as a Web Developer at Techflow.agency. Skilled in various technologies such as HTML5, CSS3, and JavaScript. Recognized for delivering exceptional results, including surpassing sales targets.
        </p>
        <p>
        Proficient in team management, customer service, and financial product sales. Holds a Bachelor's degree in Accounting and Finance from Escuela Bancaria y Comercial. 

        Certified in investment strategies by the AMIB and has completed courses in programming, cyber security, and web development. Strong problem-solving abilities and expertise in design thinking and back-end web development.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;

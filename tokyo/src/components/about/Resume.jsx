import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Experiencia",
      resume: [
        {
          id: 1,
          year: "2020 - Present",
          institute: "Techflow.agency",
          degree: "Web Developer",
        },
        {
          id: 1,
          year: "2022 - 2023",
          institute: "Globant",
          degree: "Account Executive",
        },
        {
          id: 2,
          year: "2020 - 2022" ,
          institute: "Aster Expansion",
          degree: "Sales Manager",
        },
        {
          id: 3,
          year: "2019 - 2020",
          institute: "Banco del Bajío",
          degree: "Account Executive",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2023",
          institute: "Harvardx",
          degree: "CS50's Web Programming with Python and JavaScript",
        },
        {
          id: 2,
          year: "2023",
          institute: "Harvardx",
          degree: "Introduction to programming with Python",
        },
        {
          id: 3,
          year: "2015 - 2019",
          institute: "AMIB",
          degree: "Asesor en estrategias de inversion figura 3",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;

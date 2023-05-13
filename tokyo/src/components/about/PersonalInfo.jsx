import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:sales@techflow.agency">sales@techflow.agency</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Teléfono",
          content: (
            <>
              <a href="tel:+52 55 54 72 92 59">+52 55 54 72 92 59</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationalidad",
          content: "Mexicana",
        },
        {
          id: 2,
          name: "Universidad",
          content: "Escuela Bancaria y Comercial",
        },
        {
          id: 3,
          name: "Grado",
          content: "Universitario",
        },
        {
          id: 4,
          name: "Intereses",
          content: "Tecnología , Gym , Deportes ",  
        },
        {
          id: 5,
          name: "Freelance",
          content: "Disponible",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;

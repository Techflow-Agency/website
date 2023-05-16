import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Victor Gallo",
    designation: "Web Developer",
    text: (
      <>
        <p> 
Como experto en HTML, CSS, Bootstrap, JavaScript, React, API's y GIT, poseo un amplio conocimiento técnico y experiencia práctica para desarrollar soluciones web de vanguardia. Mi enfoque analítico y antecedentes empresariales me permiten comprender sus necesidades y convertirlas en interfaces amigables para el usuario que cautivarán a su audiencia.
        </p>
       <p>Soy un profesional competitivo que se esfuerza por superar las expectativas en cada proyecto. La resolución de problemas y la generación de ideas son mis fortalezas, lo que me permite encontrar soluciones creativas y efectivas para los desafíos que se presenten. Además, mi curiosidad innata y disposición para asumir riesgos me convierten en un agente de cambio, siempre buscando nuevas formas de innovar y mejorar.<p/>
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

import React from "react";
import Social from "./Social";
import { Typewriter } from 'react-simple-typewriter'

const handleType = (count: number) => {
  // access word count number
  console.log(count)}

const handleDone = () => {
  console.log(`Done after 5 loops!`)
}

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Techflow.Agency</h3>
            <h3 className="name1.3">         by Victor Gallo </h3>
            <br/>
            <p className="job">  
            <Typewriter
            words={['Desarrollador web', 'Experto en e-commerce', 'Growth hacker', 'Desarrollador web', ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
            />
            </p>


            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_news">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Blog</span>
                <h3>Artículos de interés</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <ul>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModalOne}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/1.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Victor Gallo</a>
                      <span>05 05 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalOne}>
                  Do Social Channels like Linkedin/Twitter Actually Lead to Sales for a SaaS?
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalOne}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModalOne}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalOne}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/1.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#">Victor Gallo</a>
                              <span>05 05 2023</span>
                            </p>
                          </div>
                          <h3 className="title">
                          Do Social Channels like Linkedin/Twitter Actually Lead to Sales for a SaaS?
                            
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                          <p className="bigger">
                          Introduction:
                          The question of whether social media engagements and views translate into actual sales for Software-as-a-Service (SaaS) companies has been a topic of debate. Skepticism surrounding "Vanity Metrics" and the variability of social networks and their content quality has led to a need for data-driven analysis. In this article, we delve into the data and trends to shed light on the correlation between social media views and sales, with a specific focus on LinkedIn.
                            </p>
                            <p>
                          Analyzing LinkedIn Data:
                          Using data from Shield App, we examined three months with low views on LinkedIn (58k, 75k, and 69k) and compared them to three months with high views (241k, 440k, 296k). Our goal was to assess the impact of these views on leads and sales, attributing them to LinkedIn.
                            </p>
                            <p>
                          Key Insights:
                          Several interesting takeaways emerged from the analysis:
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quore"
                                />
                              </div>
                              <p>
                          Correlation between Views and Sales: A correlation between social media views and sales was evident. High-view months yielded approximately double the number of attributable leads and sales compared to low-view months. However, it is important to note that the relationship does not scale linearly, as the high-view months had nearly 5 times the views.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                          Importance of Multiple Engaging Posts: The data indicated that numerous solid posts (10k+ views) outperformed a single, highly-viewed post in a given month. Sales from LinkedIn during the 296k-view month were equal to the 440k-view month, despite the latter having one post that garnered 391k views while lacking engagement in other areas.
                            </p>
                            <p>
                          Significance of Comments and Engagement: Comments and engagement emerged as crucial factors. When tracking the effectiveness of a social media strategy and seeking a leading metric for leads and sales, focusing on conversations or comments rather than views proved to be more impactful.
                            </p>
                            
                            <p>

                            </p>
                            <p>
                            
                            </p>
                            <p>


                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                      </div>
                    </div>
                    {/* END BOX INNER */}
                  </div>
                  {/* END MODALBOX NEWS */}
                </Modal>
                {/* END MODAL */}
              </div>
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalTwo}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/2.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Victor Gallo</a>
                      <span>28 04 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalTwo}>
                  Leveraging Cold Emails: A Case Study on the Growth of My SaaS from $0 to $5,000 in 90 Days
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalTwo}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>

                <Modal
                  isOpen={isOpen2}
                  onRequestClose={toggleModalTwo}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalTwo}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE MODAL */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/2.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#">Victor Gallo</a>
                              <span>28 04 2023</span>
                            </p>
                          </div>
                          <h3 className="title">
                          Leveraging Cold Emails: A Case Study on the Growth of My SaaS from $0 to $5,000 in 90 Days
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                          <p className="bigger">
                              Just because we can't get out and about like we
                              normally would, doesn’t mean we have to stop
                              taking pictures. There’s still plenty you can do,
                              provided you're prepared to use some imagination.
                              Here are a few ideas to keep you shooting until
                              normal life resumes.
                            </p>
                            <p>
                              Most photographers love to shoot the unusual, and
                              you don’t get much more unusual than These
                              Unprecedented Times. Right now everything counts
                              as out of the ordinary. There are a number of
                              remarkable things about these lockdown days that
                              are worth photographing now so we can remember
                              them when it is all over.
                            </p>
                            <p>
                              Streets empty that are usually busy are remarkable
                              and can evoke the sense of historical pictures
                              from before the invention of the motorcar. Other
                              things that are different at the moment will be
                              queues to get into stores and the lines marked out
                              on the floor to show how far apart we should be.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quore"
                                />
                              </div>
                              <p>
                                Most photographers find it hard to see
                                interesting pictures in places in which they are
                                most familiar. A trip somewhere new seems always
                                exactly what our photography needed, as shooting
                                away from home consistently inspires us to new
                                artistic heights.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              Pretend everything is new and that you haven’t
                              seen it before, and then you will be free to
                              notice the leading lines, the places where one
                              edge meets another in delightful geometric
                              harmony, and how the ordinary things in the
                              kitchen are transformed when the light is on or
                              off.
                            </p>
                            <p>
                              The trick here is to look slowly, and then look
                              again. Take the time to look in detail and to look
                              at the same thing from different angles, with
                              different light, long lenses and wide lenses. Then
                              move to the left a bit. You may never feel the
                              need to leave the house again.
                            </p>
                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalThree}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/3.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Paola Atkins</a>
                      <span>15 Feb 2021</span>
                    </p>
                  </div>

                  <h3 className="title" onClick={toggleModalThree}>
                    Why every photographer should shoot film, even in 2021
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalThree}>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen3}
                  onRequestClose={toggleModalThree}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalThree}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/3.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#">Paola Atkins</a>
                              <span>15 Feb 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            Why every photographer should shoot film, even in
                            2021
                          </h3>
                        </div>
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              Just because we can't get out and about like we
                              normally would, doesn’t mean we have to stop
                              taking pictures. There’s still plenty you can do,
                              provided you're prepared to use some imagination.
                              Here are a few ideas to keep you shooting until
                              normal life resumes.
                            </p>
                            <p>
                              Most photographers love to shoot the unusual, and
                              you don’t get much more unusual than These
                              Unprecedented Times. Right now everything counts
                              as out of the ordinary. There are a number of
                              remarkable things about these lockdown days that
                              are worth photographing now so we can remember
                              them when it is all over.
                            </p>
                            <p>
                              Streets empty that are usually busy are remarkable
                              and can evoke the sense of historical pictures
                              from before the invention of the motorcar. Other
                              things that are different at the moment will be
                              queues to get into stores and the lines marked out
                              on the floor to show how far apart we should be.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quore"
                                />
                              </div>
                              <p>
                                Most photographers find it hard to see
                                interesting pictures in places in which they are
                                most familiar. A trip somewhere new seems always
                                exactly what our photography needed, as shooting
                                away from home consistently inspires us to new
                                artistic heights.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              Pretend everything is new and that you haven’t
                              seen it before, and then you will be free to
                              notice the leading lines, the places where one
                              edge meets another in delightful geometric
                              harmony, and how the ordinary things in the
                              kitchen are transformed when the light is on or
                              off.
                            </p>
                            <p>
                              The trick here is to look slowly, and then look
                              again. Take the time to look in detail and to look
                              at the same thing from different angles, with
                              different light, long lenses and wide lenses. Then
                              move to the left a bit. You may never feel the
                              need to leave the house again.
                            </p>
                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SCCIAL SHARE */}
                          </div>
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalFour}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/4.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Kevin Stone</a>
                      <span>22 Jan 2021</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalFour}>
                    Stay creative in lockdown with these fun photo projects
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalFour}>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}
                <Modal
                  isOpen={isOpen4}
                  onRequestClose={toggleModalFour}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalFour}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/4.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}

                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#toggleButton">Kevin Stone</a>
                              <span>22 Jan 2021</span>
                            </p>
                          </div>
                          <h3 className="title">
                            Stay creative in lockdown with these fun photo
                            projects
                          </h3>
                        </div>
                        {/* END DETAILS */}

                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                              Just because we can't get out and about like we
                              normally would, doesn’t mean we have to stop
                              taking pictures. There’s still plenty you can do,
                              provided you're prepared to use some imagination.
                              Here are a few ideas to keep you shooting until
                              normal life resumes.
                            </p>
                            <p>
                              Most photographers love to shoot the unusual, and
                              you don’t get much more unusual than These
                              Unprecedented Times. Right now everything counts
                              as out of the ordinary. There are a number of
                              remarkable things about these lockdown days that
                              are worth photographing now so we can remember
                              them when it is all over.
                            </p>
                            <p>
                              Streets empty that are usually busy are remarkable
                              and can evoke the sense of historical pictures
                              from before the invention of the motorcar. Other
                              things that are different at the moment will be
                              queues to get into stores and the lines marked out
                              on the floor to show how far apart we should be.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quote"
                                />
                              </div>
                              <p>
                                Most photographers find it hard to see
                                interesting pictures in places in which they are
                                most familiar. A trip somewhere new seems always
                                exactly what our photography needed, as shooting
                                away from home consistently inspires us to new
                                artistic heights.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              Pretend everything is new and that you haven’t
                              seen it before, and then you will be free to
                              notice the leading lines, the places where one
                              edge meets another in delightful geometric
                              harmony, and how the ordinary things in the
                              kitchen are transformed when the light is on or
                              off.
                            </p>
                            <p>
                              The trick here is to look slowly, and then look
                              again. Take the time to look in detail and to look
                              at the same thing from different angles, with
                              different light, long lenses and wide lenses. Then
                              move to the left a bit. You may never feel the
                              need to leave the house again.
                            </p>
                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
              </div>
              {/* END LIST INNER */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;

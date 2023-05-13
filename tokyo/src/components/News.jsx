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
                          Introduction:
                          This article presents a case study that showcases the journey of a SaaS founder and their successful endeavor in increasing revenue from $0 to $5,000 within a span of 90 days. The focus of this account revolves around the founder's utilization of cold emails as a powerful marketing strategy, aiming to shed light on the potential impact it can have on SaaS companies.
                            </p>
                            <p>
                          The Power of Cold Emails:
                          With a customer base of over 100 paying clients, approximately 90 of them were acquired through the effective use of cold emails. The SaaS platform, known as Tweetscrape, leverages niche email marketing and lead generation micro-influencers to gather high-quality email lists. Employing an email automation tool called Instantly, the founder sends out an average of 100 emails per day. Despite the seemingly modest quantity, the conversion rate of 1% ensures the acquisition of approximately one new customer on a daily basis.
                            </p>
                            <p>
                          Purpose of Sharing:
                          It is important to clarify that the founder's intention in sharing this journey is not solely self-promotion. Instead, the primary objective is to raise awareness about the underutilized potential of cold emails within the SaaS industry. Despite the success of this marketing strategy in agency settings, it remains relatively untapped by many SaaS owners. The founder's transition from the agency world prompted a realization of this opportunity, leading them to share their insights and experiences.   
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
                            Exploring Cold Emails for SaaS:
                            The founder finds it intriguing that cold emails are not widely adopted within the SaaS industry. While alternative tools, such as Scrapybird, exist, Tweetscrape surpasses them in various aspects, as can be discerned from a cursory comparison of their landing pages. Nevertheless, it is important to note that the purpose of this article is not to endorse or directly compete with any specific product or service. Instead, it serves as an invitation for SaaS entrepreneurs to consider incorporating cold emails into their marketing strategies.    
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                            Implementation Steps:
                            To effectively implement cold emails, several recommended steps can be followed. Firstly, entrepreneurs should consider utilizing lead scraping tools, such as Apollo, Zoominfo, or other reputable options, to acquire targeted email lists. Secondly, selecting a reliable cold email software, such as Instantly, GMass, or similar platforms, can streamline and automate the email outreach process. Lastly, launching a campaign involves sending personalized and engaging emails to identified prospects, adhering to best practices for cold email outreach.   
                            </p>
                            <p>
                            Conclusion:
                            Based on the founder's personal experience and the success of Tweetscrape, it is evident that cold emails hold significant untapped potential for SaaS companies. By leveraging targeted email lists and utilizing effective email automation tools, entrepreneurs can unlock new growth opportunities. This article encourages SaaS owners to explore the strategy of cold emails by incorporating existing lead scraping and cold email software, thereby embracing the potential of this approach to expand their customer base and increase revenue.   
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
                      By <a href="#">Victor Gallo</a>
                      <span>21 04 2023</span>
                    </p>
                  </div>

                  <h3 className="title" onClick={toggleModalThree}>
                  An In-Depth Landing Page Optimization Checklist for SaaS: Insights from Analyzing 100+ Websites
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
                              By <a href="#">Victor Gallo</a>
                              <span>21 05 2023</span>
                            </p>
                          </div>
                          <h3 className="title">
                          An In-Depth Landing Page Optimization Checklist for SaaS: Insights from Analyzing 100+ Websites
                          </h3>
                        </div>
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                            Introduction:
                            This article presents a comprehensive landing page optimization checklist specifically tailored to Software-as-a-Service (SaaS) companies. Drawing from an analysis of over 100 SaaS websites, the checklist aims to address common mistakes and provide actionable guidelines for creating high-converting landing pages. By following these recommendations, businesses can elevate their landing pages to the top 10% of the most effective conversion pages on the internet.
                            </p>
                            <p>
                            General Guidelines:
                            Ensure your landing page meets these essential criteria before proceeding further:
                            </p>
                            <p>
                            Use a customized landing page for each specific offer instead of driving traffic to the homepage.
                            Establish a clear and singular conversion goal for the page.
                            Maintain a familiar layout that aligns with users' expectations based on their experiences on other websites.
                            Adjust the page length to match the complexity of the offer and users' awareness level, providing sufficient content to explain and persuade effectively.
                            Implement the principles of Jacob's Law, acknowledging that users spend most of their time on other sites and prefer a familiar website experience.
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
                              Hero Section:
                              The hero section holds utmost importance as it is the first impression visitors receive. To capture their attention and encourage further exploration, consider the following:
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>
                              Ensure message and design consistency with the ad that led visitors to your site.
                              Pass the 5-second test, where visitors can quickly answer essential questions: Where am I? What can I do here? Why should I do it?
                              Craft an attention-grabbing, easily understandable value proposition in the headline based on what your happiest customers value most.
                              Expand on the promise of the headline in the subheadline by briefly explaining how your product enables it.
                              Optimize text font size and contrast to enhance readability.
                              Feature a prominent, contrasting Call to Action (CTA) button above the fold.
                              Make sure the CTA copy is specific and conveys a benefit.
                              Utilize images or videos that provide context and avoid using them as mere placeholders.
                              Include microcopy near the CTA to address any potential friction or uncertainty.
                              If a secondary CTA is present, ensure it is less dominant and clearly differentiated.
                              Display trust elements, such as badges, ratings, and statistics, to establish credibility.
                            </p>
                            <p>
                            Body:
                            The body section allows you to showcase how your product solves problems and why it surpasses existing solutions. Keep the following points in mind:
                            </p>
                            <p>Tailor your messaging to target one persona at a time, addressing their pain points and using language that resonates with them.
                            Shift the focus of your copy to highlight the benefits your product brings to users, emphasizing their improved lives rather than self-promotion.
                            Use direct, user-centric language to engage and resonate with prospective customers.
                            Clearly demonstrate how your product offers a superior solution compared to what users currently use, even if the alternative is not a direct competitor.
                            Explain product features using screenshots or GIFs of the app's user interface, avoiding generic illustrations or stock photos.
                            Ensure the readability and clarity of product screenshots, making it easy for users to understand what they depict.
                            Proactively address common objections users may have and instill confidence in your product's ability to handle them.
                            Support bold claims with relevant proof, such as ratings, testimonials, or certifications.
                            Make features and benefits as specific as possible, avoiding generic statements.
                            Display credibility indicators, including customer testimonials, awards, certifications, press mentions, and ratings from app stores or review sites.
                            Optimize customer testimonials for credibility by highlighting specific benefits, displaying reviewers' profiles, and using real pictures instead of stock photos.
                            Ensure clarity in displaying how the product works and how users will benefit from it. Organize the page content logically, ensuring a smooth flow between sections that seamlessly connect to create a cohesive user experience. Avoid including outbound links that may distract users from the primary conversion goal.
                            </p>
                            <p>
                            Signup:
                            Once users are convinced and ready to sign up, it's crucial to optimize the signup flow to minimize drop-offs. Consider the following:
                            </p>
                            <p>
                            Clearly communicate what will happen after users fill out the form, either through the form heading or CTA copy.
                            Only request necessary information for creating a user account or improving user experience, explaining the reasons behind any required data.
                            Avoid requiring email verification unless necessary for security purposes, and place it as far back in the flow as possible to prevent distractions.
                            Implement multistep forms to break down long forms into smaller, more manageable steps and reduce cognitive load.
                            Incorporate a progress bar for multistep forms, ensuring users feel a sense of progress and motivation to complete the process.
                            Place high-friction steps at the end of the flow to increase completion rates and avoid discouraging users from finishing.
                            Implement form tracking to analyze abandonment rates at specific steps and fields, using tools like Hotjar or Inspectlet.
                            Clearly explain how providing sensitive information will enhance the user experience when making high-friction requests.
                            Reassure users that any uncertain answers can be easily reversed, alleviating fear, uncertainty, and doubt.
                            Top-align and keep field labels visible at all times while users fill out the form.
                            Use radio buttons for up to four options and dropdowns for more than four to ensure a user-friendly selection process.
                            Sort large lists alphabetically or from smallest to largest, providing a search feature for easier navigation.
                            Make forms interactive whenever possible to enhance engagement.
                            Eliminate the need for password confirmation fields and offer a "show password" feature instead.
                            Provide clear feedback about errors next to relevant fields, only displaying error messages after users click away from the erroneous field.
                            Ensure error messages disappear once users correct the input.
                            Retain incorrect field input after form submission, highlighting the errors without clearing the entire form.
                            Include descriptions or tooltips for non-obvious fields, offering clear explanations of expected user input.
                            Utilize autofill whenever possible to streamline the signup process based on user data, such as IP-derived country or email domain.
                            Format fields appropriately based on expected input types (e.g., credit card, phone number, date of birth) to minimize errors.
                            On mobile devices, provide relevant keypads for different input types to avoid unnecessary switching.
                            Implement single sign-on options to enhance convenience while signing up.
                            </p>
                            <p>
                            Other Considerations:
                            In addition to optimizing the core sections of your landing page, pay attention to the following factors for a well-rounded user experience:
                            </p>
                            <p>
                            Ensure the page design aligns with your brand identity and appeals to your target audience.
                            Break down long paragraphs for improved legibility.
                            Maintain consistency in content style, including font types, colors, sizes, button styles, and capitalization.
                            Use simple and targeted language that resonates with your target audience, avoiding generic phrases and buzzwords.
                            Optimize page load time to under 4 seconds on desktop devices, using tools like Google PageSpeed Insights to assess performance.
                            Ensure the page displays properly on all main devices and screen resolutions, leveraging cross-browser testing tools for thorough evaluation.
                            Offer an attractive exit-intent offer to capture traffic leaving the page without signing up, using tools like Getsitecontrol.
                            Provide easy access for users to contact you in case of questions, such as live chat, email, phone, or any other preferred communication channels.

                            Avoid using scroll jacking, which interferes with users' scrolling behavior and can lead to a negative user experience.
                            Keep the scroll bar visible at all times for easy navigation and orientation within the page.
                            Double-check for grammar and spelling errors, utilizing tools like Grammarly or QuillBot to ensure correctness.
                            Optimize videos for engagement, including enticing thumbnail images, hooks in the first few seconds, essential information presented early, captions for muted viewing, and clear calls to action.
                            Host videos using platforms that provide insights on drop-off points, such as Wistia, for effective analysis and improvement.
                            </p>
                            <p>
                            Bonus: Pricing Page:
                            If your landing page includes a pricing section, consider the following additional guidelines:  
                            </p>
                            <p>
                            Display your subscription prices publicly, as the lack of pricing transparency can deter potential customers and erode trust.
                            Highlight either your product's value proposition or the benefits of your pricing structure in the headline.
                            Present between 2 and 5 pricing plans per pricing table, balancing simplicity and choice.
                            Ensure users can quickly distinguish the differences between pricing plans, providing a summary of key features and a detailed comparison.
                            Explain any non-obvious features using tooltips or interactive elements to enhance clarity.
                            Offer multiple subscription duration options and incentives, such as discounts, to encourage users to choose longer-term plans.
                            Display prices in the visitor's local currency based on their IP, with the option to switch to different currencies if needed.
                            Include an FAQ section that addresses common objections users may have regarding pricing.
                            Facilitate quick contact with your team for further pricing-related inquiries through live chat, phone, or other suitable channels.
                            Incorporate relevant credibility indicators, such as customer reviews, badges, certificates, and customer logos, to establish trustworthiness.  
                            </p>
                            <p>
                            Useful Tools for Optimization:
                            Consider utilizing the following tools to aid in optimizing your landing pages:  
                            </p>
                            <p>
                            Hemingway App: A free application that helps improve copy clarity and readability.
                            Wynter: A B2B message testing tool that provides feedback on your copy from relevant audiences.
                            UsabilityHub and Conversion Crimes: User and usability testing platforms that offer valuable feedback on various aspects of your landing page.
                            Hotjar and Inspectlet: Tools for session recordings, heatmaps, and form analytics to gain insights into user behavior and optimize accordingly.
                            A/B testing tools like Google Optimize or VWO: Useful for testing new optimization ideas and identifying the most effective strategies.  
                            </p>
                            <p>
                            Conclusion:
                            By diligently following this extensive landing page optimization checklist, SaaS companies can create highly converting pages that engage users, effectively communicate value propositions, and drive conversions. Remember to continually test and iterate based on user feedback and data to further improve the performance and effectiveness of your landing pages.

                            For an editable Notion document containing the complete checklist, including screenshots of good and bad examples, allowing for collaboration with your team, refer to the provided link. Happy optimizing!  
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

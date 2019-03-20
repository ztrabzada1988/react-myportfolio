import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Education from "./resume/education";
import Experience from "./resume/experience";
import Skills from "./resume/skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid style={{ marginTop: "70px" }}>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Zubair Trabzada</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am passionate and highly skilled sales engineer & web developer
              with strong technical background and communication skills. I am
              very passionate about software engineering, artificial
              intelligence and machine learning. I have experience with
              customer-facing roles, presentations, product demos, marketing,
              and other in-demand skills. I have experience in full stack web
              development programming languages such as SQL, Javascript, HTML,
              CSS, React JS, Node JS, APIs, and etc.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>2361 Sutter Avenue, Santa Clara, CA 95050</p>
            <h5>Phone</h5>
            <p>(510) 709-6913</p>
            <h5>Email</h5>
            <p>zubair.trabzada@gmail.com</p>
            <h5>Web</h5>
            <p>ztrabzada.cf</p>
            <hr style={{ borderTop: "3px solid white", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h3>Experience</h3>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Sales Engineer & Web Developer"
              jobDescription={
                <div>
                  <p>
                    This position has high prospect and customer exposure. It
                    requires the ability to communicate with a variety of
                    people, both technical and non-technical, sometimes on the
                    same call. Written communications consist of anything from
                    high-level overviews to step-by-step instructions. I was
                    instrumental in sales, with 90% of those I am involved with
                    closing.
                  </p>
                  <ul>
                    <li>
                      Demonstrated the application to prospects, tailored to
                      their company needs
                    </li>
                    <li>
                      Assisted account managers to determine best fit of
                      software options for prospects
                    </li>
                    <li>
                      Trained customers on advanced features through screen
                      share apps, in person and via phone
                    </li>
                    <li>
                      Collected, analyzed and reported prospect comments on
                      application design and user interface to product manager
                    </li>

                    <li>
                      Aided in marketing company’s products and services to
                      potential customers.
                    </li>
                    <li>
                      Provided user research data and be the voice of customers
                      to the company.
                    </li>
                    <li>
                      Explained complex Blockchain and Cryptocurrency topics to
                      non-technical customers.
                    </li>
                    <li>
                      Constantly researched Blockchain and Cryptocurrency
                      technology to provide the most Updated information to the
                      founders for better product delivery.
                    </li>
                    <li>
                      Attended Blockchain meetups and conferences in the San
                      Francisco Bay Area to build relationships with potential
                      clients
                    </li>
                    <li>
                      Aid engineers in building the front end of a
                      crypto-payment application using React JS to make sure the
                      front end of the application works smoothly with Web3,
                      Solidity and Metamask.
                    </li>
                    <li>
                      Built, designed, and launched the entire Bitypes.com
                      website from start to finish. Maintain website and report
                      user analytics to the founders
                    </li>
                  </ul>
                </div>
              }
            />
            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Cryptocurrency Marketing Consultant (Freelance)"
              jobDescription={
                <ul>
                  <li>
                    Did one-on-one marketing for ICOs and Cryptocurrencies
                    during in person meetups in the San Francisco Bay Area.
                  </li>
                  <li>
                    Assisted in product demos for new startups in the Blockchain
                    industry.
                  </li>
                  <li>
                    Assisted in product demos for new startups in the Blockchain
                    industry.
                  </li>
                  <li>
                    Researched Blockchain projects and new Cryptocurrencies to
                    gain more knowledge and invest appropriately.
                  </li>
                  <li>
                    Attended meetups in the San Francisco Bay Area to meet
                    founding members of new Blockchain companies and developers.
                  </li>
                  <li>
                    Wrote (medium.com) articles on Blockchain, Cryptography, and
                    Cryptocurrencies.
                  </li>

                  <li>
                    Thoroughly evaluating white papers and GitHub code of new
                    Blockchain projects before investing.
                  </li>
                </ul>
              }
            />
            <Experience
              startYear={2013}
              endYear={2017}
              jobName="Project Engineer at C&S Engineers Inc & Langan Engineering Inc."
              jobDescription={
                <ul>
                  <li>
                    Assisted in business development of company's services
                  </li>
                  <li>
                    Met with clients to explain company's consulting services
                    and solutions
                  </li>
                  <li>
                    Tailored companies consulting services to meet unique
                    customer solutions
                  </li>
                  <li>Designed and implemented various engineering projects</li>
                  <li>
                    Oversaw projects from start to finish (design, calculations,
                    budgeting amd prioritizing tasks, and etc.)
                  </li>
                  <li>
                    Responded to information requests from onsite contractors
                    regarding design and calculations of ongoing projects
                  </li>
                  <li>
                    Solving daily problems faced on site and in the office to
                    make sure projects completes on time and budget
                  </li>
                  <li>Training new engineers on daily tasks.</li>
                  <li>
                    Handling daily communications between public and staff for
                    the department.
                  </li>
                  <li>
                    Incorporating new software to make routine tasks more
                    efficient.
                  </li>
                </ul>
              }
            />

            <Experience
              startYear={2012}
              endYear={2013}
              jobName="Sales Engineer at Buffalo Wire Works"
              jobDescription={
                <ul>
                  <li>
                    Assisted in business development of company's services
                  </li>
                  <li>
                    Met with clients to explain company's consulting services
                    and solutions
                  </li>
                  <li>
                    Tailored companies consulting services to meet unique
                    customer solutions
                  </li>
                  <li>Designed and implemented various engineering projects</li>
                  <li>
                    Oversaw projects from start to finish (design, calculations,
                    budgeting amd prioritizing tasks, and etc.)
                  </li>
                </ul>
              }
            />
            <hr style={{ borderTop: "1px solid grey" }} />

            <h3>Education</h3>

            <Education
              schoolName="University at Buffalo"
              major="B.S. in Structural Engineering"
              schoolDescription="Completed studies in advance mathematics, structural engineering, statistics, problem solving, engineering design subjects, technical writing, and etc."
            />
            <Education
              schoolName="Thinkful Coding Bootcamp"
              major="Full Stack Web Development"
              schoolDescription="Completed coding bootcamp in full stack web development with HTML, CSS, JavaScript, React.js, Redux, Node.js, jQuery, Webpack, Express, Bootstrap, Heroku, and GitHub"
            />
            <Education
              schoolName="Udemy"
              major="Web Development (Continuously Learning)"
              schoolDescription="I am constantly taking courses on Udemy to keep my skills up to date. So far, I have taken 10 courses in various Web and Blockchain development topics."
            />
            <hr style={{ borderTop: "1px solid grey" }} />

            <h3>Skills</h3>
            <Skills skill="Javascript" progress={90} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="React" progress={80} />
            <Skills skill="Ethereum/Solidity" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

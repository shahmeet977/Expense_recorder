import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import EMS from "../assets/img/EMS.png";
import EP from "../assets/img/EP.png";
import CC from "../assets/img/CC.jpeg";
import SMS from "../assets/img/SMS.jpeg";
import SL from "../assets/img/SL.png";
import ER from "../assets/img/ER.png";


import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const projects = [
    {
      title: "Error Page - ZCS",
      description: "Implemented the Error Page at Tekion using Next.js, React.js and Redux. In this, the error message that is displayed on the page varies according to various failure conditions. Also, have to implement different designs for Mobile and Tablet.",
      imgUrl: EP,
    },
    {
      title: "Salary Management System",
      description: "Developed the full fledged web application using Django framework and PostgreSQL specifically to cater to firm employees’ ids and CTC salary, PF deduction or increment in net salary, including records of total employee’s leave and is completely self-contained and efficient.",
      imgUrl: SMS,
    },
  ];

  const project1 = [
    {
      title: "OpenMP Based Implementation of SkipList",
      description: "Implemented the insertion search and deletion in Skip List algorithms, which can be run in parallel on a computer machine. Also optimized the algorithms using the library available in OpenMP in C. Profiling of the code was also done to omit potential data leaks.",
      imgUrl: SL,
    },
    {
      title: "Expense Tracker",
      description: "Using the expense tracker, the user can create the expense by entering the amount, category, expense and date. And from it, the user can also set his monthly and yearly budget and get info like the money he spends every month and year and also able to view graphical representation.",
      imgUrl: ER,
    },
  ];

  const project2=[
    {
      title: "Chitchat Web Application",
      description: "A Full Stack Chat application developed us-ing MERN stack having functionalities of one-one and group chat realtime messaging along with notification, update profile, creating new groups and adding or removing users from the group",
      imgUrl: CC,
    },
    {
      title: "E-Case Management",
      description: "Implemented A database driven web application using PHP and MySQL which is a one solution to manage all the hospital related activities from admin side which includes Doctor’s job request, patient registration, Booking Appointment along with email notification and payment option.",
      imgUrl: EMS,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In Tekion, I have worked on the Error Page for the Cadillac, EV and Carbravo. I have also solved many UI / UX Bugs at Tekion. Apart from that, I have also done some helpful projects that can be useful in Real life.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "center"}>
                    <Tab.Pane eventKey="first">
                      <Row className="tmp">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="">
                    <Row className="tmp">
                        {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row className="tmp">
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import { motion, useInView } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import { useTypewriter } from "react-simple-typewriter";
import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import profile_img from "../../assets/profile-img.jpg";
import profile_img_2 from "../../assets/profile-img-2.jpg";
import cv from "../../assets/CV.pdf";
import "./About.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  const profile_img_2_ref = useRef(null);
  const isInView_profile_img_2 = useInView(profile_img_2_ref, {
    once: true,
    amount: 0.1,
  });

  const desc_text_ref = useRef(null);
  const isInView_desc_text = useInView(desc_text_ref, {
    once: true,
    amount: 0.5,
  });

  const [text, helper] = useTypewriter({
    words: ["Jan Kierejsza", "Front-end developer", " "],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const { isDone } = helper;

  let animation = {};

  if (isAboveMediumScreen) {
    animation = {
      y: 150,
    };
    if (isDone) {
      animation = {
        y: 0,
      };
    }
  } else {
    animation = {
      y: 0,
    };
  }

  const decsciption_text: string =
    "I am currently enrolled as a student at the Warsaw University of Technology on my last semester of Master's studies in the field of Automation, Robotics and Industrial Computer Science. I am looking for a job that will allow me to further develop my skills and at the same time I am working on my own projects.";
  const splitted_description_text: Array<string> = decsciption_text.split(" ");

  return (
    <div id="about" className="about">
      <motion.div
        className="about-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <div className="profile-img-text">
          <div className="profile-img-container">
            <img src={profile_img} alt="profile picture" />
          </div>
          <div className="profile-text">
            <motion.div
              className="writing-text"
              animate={animation}
              transition={{
                type: "spring",
                stiffness: 60,
              }}
            >
              <span>Hello, I'm {text}</span>
            </motion.div>

            <motion.div
              className="profile-text-elements"
              animate={{
                opacity: isDone ? 1 : 0,
                y: isDone ? 0 : -200,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
              }}
            >
              <span>Jan Kierejsza</span>
              <span>Front-end developer</span>
            </motion.div>
            <motion.div
              className="profile-button-elements"
              animate={{
                opacity: isDone ? 1 : 0,
                scale: isDone ? 1 : 0.5,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
              }}
            >
              <div className="profile-buttons">
                <a className="btn" href={cv} target="_blank">
                  Download CV
                </a>
                <AnchorLink
                  className="btn"
                  onClick={() => setSelectedPage(SelectedPage.Contact)}
                  href={"#contact"}
                >
                  Contact Me
                </AnchorLink>
              </div>
              <div className="profile-links">
                <a
                  href="https://github.com/jankier"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="link"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/jan-kierejsza-a129351b2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="link"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="about-me">
          <div className="about-me-text">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Get to Know More
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              About Me
            </motion.span>
          </div>
          <div className="about-me-img-desc">
            <div className="circle-text-img">
              <motion.div
                ref={profile_img_2_ref}
                className="img-desc-left"
                animate={{
                  opacity: isInView_profile_img_2 ? 1 : 0,
                  scale: isInView_profile_img_2 ? 1 : 0.75,
                }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                }}
              >
                <img src={profile_img_2} alt="profile picture 2"></img>
              </motion.div>
              <div>
                <div className="rounded-text rotating">
                  <svg viewBox="0 0 200 200">
                    <path
                      id="textPath"
                      d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                      transform="translate(100,100)"
                      fill="none"
                      stroke-width="0"
                    ></path>
                    <g font-size="0.45rem">
                      <text text-anchor="start">
                        <textPath xlinkHref="#textPath" startOffset="0%">
                          - Jan Kierejsza - Student - Front-end Developer -
                          Independent Designer - Fast Learner - Eager To Create
                          - Strong Communication Abilities
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="img-desc-right">
              <div className="exp-edu-text">
                <div className="experience-container">
                  <div className="loader"></div>
                  <div className="experience-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <span>Experience</span>
                  <span>
                    Currently looking to get my first commercial experience
                  </span>
                </div>
                <div className="education-container">
                  <div className="loader1"></div>
                  <div className="education-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <span>Education</span>
                  <span>B.Sc. Bachelors Degree</span>
                  <span>M.Sc. Masters Degree</span>
                  <span>(currently enrolled)</span>
                </div>
              </div>
              <div ref={desc_text_ref} className="about-me-desc">
                {splitted_description_text.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      y: i % 2 === 0 ? -25 : 25,
                    }}
                    animate={{
                      opacity: isInView_desc_text ? 1 : 0,
                      y: isInView_desc_text ? 0 : i % 2 === 0 ? -25 : 25,
                    }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

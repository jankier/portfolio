import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SelectedPage, ExperienceType } from "../../shared/types";
import { frontend_experience } from "../../shared/frontend_experience";
import { backend_experience } from "../../shared/backend_experience";
import { other_experience } from "../../shared/other_experience";
import "./Experience.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Experience = ({ setSelectedPage }: Props) => {
  const skills_ref = useRef(null);
  const isInView_skills = useInView(skills_ref, { once: true });

  return (
    <div id="experience" className="experience">
      <motion.div
        className="experience-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
      >
        <div className="experience-text">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Explore My
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Experience
          </motion.span>
        </div>
        <div className="experience-elements" ref={skills_ref}>
          <div className="frontend-container">
            <div className="experience-container-bg"></div>
            <span>Front-end Development</span>
            <div className="skills">
              {frontend_experience.map((skill: ExperienceType, i) => (
                <motion.div
                  className="skill"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: -20,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: isInView_skills ? 1 : 0,
                    y: isInView_skills ? 0 : -20,
                    scale: isInView_skills ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  {skill.icon}
                  <div className="skill-level">
                    <div>{skill.title}</div>
                    <div>{skill.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="backend-container">
            <div className="experience-container-bg"></div>
            <span>Back-end Development</span>
            <div className="skills">
              {backend_experience.map((skill: ExperienceType, i) => (
                <motion.div
                  className="skill"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: -20,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: isInView_skills ? 1 : 0,
                    y: isInView_skills ? 0 : -20,
                    scale: isInView_skills ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5, delay: i * 0.5 }}
                >
                  {skill.icon}
                  <div className="skill-level">
                    <div>{skill.title}</div>
                    <div>{skill.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="other-container">
          <div className="experience-container-bg"></div>
          <span>Other</span>
          <div className="skills">
            {other_experience.map((skill: ExperienceType, i) => (
              <motion.div
                className="skill"
                key={i}
                initial={{
                  opacity: 0,
                  y: -20,
                  scale: 0.5,
                }}
                animate={{
                  opacity: isInView_skills ? 1 : 0,
                  y: isInView_skills ? 0 : -20,
                  scale: isInView_skills ? 1 : 0.5,
                }}
                transition={{ duration: 0.5, delay: i * 0.5 }}
              >
                {skill.icon}
                <div className="skill-level">
                  <div>{skill.title}</div>
                  <div>{skill.level}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

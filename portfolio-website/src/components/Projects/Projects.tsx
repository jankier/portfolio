import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectType, SelectedPage } from "../../shared/types";
import { projects_elements } from "../../shared/projects_elements";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Projects.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  const project_ref = useRef(null);
  const isInView_project = useInView(project_ref, {
    once: true,
    amount: isAboveMediumScreen ? 0.6 : 0.2,
  });

  return (
    <div id="projects" className="projects">
      <motion.div
        className="projects-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <div className="projects-text">
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
            Browse My Recent
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
            Projects
          </motion.span>
        </div>
        <div ref={project_ref} className="projects-elements">
          {projects_elements.map((project: ProjectType, i) => (
            <motion.div
              className="single-project"
              key={i}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: isInView_project ? 1 : 0,
                y: isInView_project ? 0 : 100,
              }}
              transition={{ duration: 0.3, delay: i * 0.3 }}
            >
              <div className={`single-project-bg c${i}`}></div>
              <div className="single-project-img">
                {project.image}
                <div className="project-desc">
                  <div>
                    <span>{project.desc}</span>
                  </div>
                </div>
              </div>
              <div className="project-title">{project.title}</div>
              <div className="project-buttons">
                <a
                  className="project-btn"
                  href={project.github}
                  target="_blank"
                >
                  GitHub
                </a>
                <a className="project-btn" href={project.demo} target="_blank">
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

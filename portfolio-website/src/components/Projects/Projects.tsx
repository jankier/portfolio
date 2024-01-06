import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectType, SelectedPage } from "../../shared/types";
import { projects_elements } from "../../shared/projects_elements";
import "./Projects.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const project_ref = useRef(null);
  const isInView_project = useInView(project_ref, { once: true });

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
            viewport={{ once: true, amount: 1 }}
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
                y: -20,
                scale: 0.5,
              }}
              animate={{
                opacity: isInView_project ? 1 : 0,
                y: isInView_project ? 0 : 20,
                scale: isInView_project ? 1 : 0.5,
              }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <div className="single-project-img">{project.image}</div>
              <span>{project.title}</span>
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

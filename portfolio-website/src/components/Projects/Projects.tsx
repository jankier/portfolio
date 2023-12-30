import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import "./Projects.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <div id="projects" className="projects">
      <motion.div
        className="projects-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
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
      </motion.div>
    </div>
  );
};

export default Projects;
